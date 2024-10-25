// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import {
  BoldFeature,
  FixedToolbarFeature,
  HeadingFeature,
  ItalicFeature,
  LinkFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import sharp from 'sharp' // editor-import
import { UnderlineFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import Categories from './collections/Categories'
import { Media } from './collections/Media'
import Users from './collections/Users'
import { Footer } from '@/Globals/Footer/config'
import { Header } from '@/Globals/Header/config'
import { revalidateRedirects } from './hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { Author, Blogpost, CaseStudy, Podcast, TalksAndRoundtable } from "src/payload-types";
import { Blogposts } from "@/collections/Blogposts";
import { Authors } from "@/collections/Authors";
import { CaseStudies } from "@/collections/CaseStudies";
import { Podcasts } from "@/collections/Podcasts";
import { TalksAndRoundtables } from "@/collections/TalksAndRoundtables";
import { HomePageSettings } from "@/Globals/HomepageSettings/config";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { testAdapt } from "@/collections/Media/storageAdapter";
import { Socials } from "@/collections/Globals/Socials/config";

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const generateTitle: GenerateTitle<Blogpost | Podcast | Author | CaseStudy | TalksAndRoundtable> = ({ doc }) => {
  // @ts-ignore
  return doc?.title ? `Subvisual | ${doc.title}` : 'Payload Website Template'
}

const generateURL: GenerateURL<Blogpost | Podcast | Author | CaseStudy | TalksAndRoundtable> = ({ doc }) => {
  return doc?.slug
    ? `${process.env.NEXT_PUBLIC_SERVER_URL!}/${doc.slug}`
    : process.env.NEXT_PUBLIC_SERVER_URL!
}

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],

    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: lexicalEditor({
    features: () => {
      return [
        UnderlineFeature(),
        BoldFeature(),
        ItalicFeature(),
        LinkFeature({
          enabledCollections: ['blogposts', 'podcasts', 'case-studies', 'talks-and-roundtables'],
          fields: ({ defaultFields }) => {
            const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
              if ('name' in field && field.name === 'url') return false
              return true
            })

            return [
              ...defaultFieldsWithoutUrl,
              {
                name: 'url',
                type: 'text',
                admin: {
                  condition: ({ linkType }) => linkType !== 'internal',
                },
                label: ({ t }) => t('fields:enterURL'),
                required: true,
              },
            ]
          },
        }),
      ]
    },
  }),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [Media, Categories, Users, Authors, Blogposts, Podcasts, TalksAndRoundtables, CaseStudies],
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  globals: [Header, Footer, Socials, HomePageSettings],
  plugins: [
    redirectsPlugin({
      collections: ['authors', 'blogposts', 'podcasts', 'talks-and-roundtables', 'case-studies'],
      overrides: {
        // @ts-expect-error
        fields: ({ defaultFields }) => {
          return defaultFields.map((field) => {
            if ('name' in field && field.name === 'from') {
              return {
                ...field,
                admin: {
                  description: 'You will need to rebuild the website when changing this field.',
                },
              }
            }
            return field
          })
        },
        hooks: {
          afterChange: [revalidateRedirects],
        },
      },
    }),
    nestedDocsPlugin({
      collections: ['categories'],
    }),
    seoPlugin({
      generateTitle,
      generateURL,
    }),
    // Disabling for the time being
    // searchPlugin({
    //   collections: ['blogposts', 'podcasts', 'talks-and-roundtables', 'authors', 'case-studies'],
    //   beforeSync: beforeSyncWithSearch,
    //   searchOverrides: {
    //     fields: ({ defaultFields }) => {
    //       return [...defaultFields, ...searchFields]
    //     },
    //   },
    // }),
    cloudStoragePlugin({
      enabled: true,
      collections: {
        media: {
          disableLocalStorage: true,
          adapter: testAdapt,
          generateFileURL: (args) => {
            const url = `${process.env.CDN_DOMAIN}/${args.filename}`
            return url
          }
        }
      }

    }),// storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET!,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
