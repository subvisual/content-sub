import type { CollectionConfig } from "payload";

import { slugField } from "@/fields/slug";
import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { authenticated } from "@/access/authenticated";
import { revalidatePodcast } from "@/collections/Podcasts/hooks";
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";

// TODO: Add preview;

export const Podcasts: CollectionConfig = {
  slug: "podcasts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "podcasts",
        });

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "podcasts",
      });
      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
    afterChange: [revalidatePodcast],
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
      label: "Episode Summary",
      type: "textarea",
      required: true,
    },
    {
      name: "notes",
      label: "Episode Notes",
      type: "textarea",
      required: true,
    },
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
      name: "episodeFile",
      label: "Episode File",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "spotify",
          label: "Spotify CMSLink",
          type: "text",
          admin: {
            width: "50%",
          },
        },
        {
          name: "apple",
          label: "Apple Podcasts CMSLink",
          type: "text",
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "authors",
      hasMany: true,
      required: true,
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
      label: "Related Episodes",
      type: "relationship",
      relationTo: "podcasts",
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
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
