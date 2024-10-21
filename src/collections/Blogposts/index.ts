import { BlocksFeature, FixedToolbarFeature, HeadingFeature, HorizontalRuleFeature, HTMLConverterFeature, InlineToolbarFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

import { slugField } from "@/fields/slug";
import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { revalidatePost } from "@/collections/Blogposts/hooks";

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";
import { Banner } from "@payloadcms/ui/elements/Banner";
import { Code } from "@/blocks/Code/config";

export const Blogposts: CollectionConfig = {
  slug: "blogposts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "blogposts",
        });

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "blogposts",
      });
      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
    },
  },
  hooks: {
    afterChange: [revalidatePost],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
  access: {
    read: authenticatedOrPublished,
    update: authenticated,
    create: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "textarea",
      required: true,
      maxLength: 250,
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
          BlocksFeature({ blocks: [Code] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          HorizontalRuleFeature(),
          HTMLConverterFeature({})],
      }),
    },
    lexicalHTML("content", { name: "content_html" }),
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "authors",
      required: true,
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "categories",
      label: "Categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "related",
      label: "Related Posts",
      type: "relationship",
      relationTo: "blogposts",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    ...slugField(),
    {
      name: "meta",
      type: "group",
      label: "SEO",
      admin: {
        position: "sidebar",
      },
      fields: [
        OverviewField({
          titlePath: "meta.title",
          descriptionPath: "meta.description",
          imagePath: "meta.image",
        }),
        MetaTitleField({
          hasGenerateFn: true,
        }),
        MetaImageField({
          relationTo: "media",
        }),

        MetaDescriptionField({}),
        PreviewField({
          // if the `generateUrl` function is configured
          hasGenerateFn: true,

          // field paths to match the target field for data
          titlePath: "meta.title",
          descriptionPath: "meta.description",
        }),
      ],
    },
  ],
};
