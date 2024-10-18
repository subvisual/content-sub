import type { CollectionConfig } from "payload";

import { anyone } from "@/access/anyone";
import { slugField } from "@/fields/slug";

import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { authenticated } from "@/access/authenticated";
import { link } from "@/fields/link";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { MetaDescriptionField, MetaImageField, MetaTitleField, OverviewField, PreviewField } from "@payloadcms/plugin-seo/fields";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "role", "slug"],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === "string" ? data.slug : "",
          collection: "authors",
        });

        console.log(`
        PATH IS

        ${path}

        `)

        return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
      },
    },
    preview: (data) => {
      const path = generatePreviewPath({
        slug: typeof data?.slug === "string" ? data.slug : "",
        collection: "authors",
      });
      return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;
    },
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: { drafts: true },
  access: {
    read: authenticatedOrPublished,
    update: anyone,
    create: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: "featuredImage",
      label: "Picture",
      type: "upload",
      relationTo: "media",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "authorName",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "textarea",
      maxLength: 250,
      required: true,
    },
    {
      type: "group",
      name: "socials",
      label: 'Socials',
      fields: [
        {
          name: 'linkedIn',
          label: 'LinkedIn',
          type: "array",
          fields: [
            {
              name: "url",
              type: "text",
            },
          ],
          maxRows: 1,
        },
        {
          name: "x",
          type: "array",
          fields: [
            {
              name: "url",
              type: "text",
            },
          ],
          maxRows: 1,
        },
        {
          name: "github",
          type: "array",
          fields: [
            {
              name: "url",
              type: "text",
            },
          ],
          maxRows: 1,
        },
        {
          name: "medium",
          type: "array",
          fields: [
            {
              name: "url",
              type: "text",
            },
          ],
          maxRows: 1,
        },
      ],
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
    ...slugField("authorName"),
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
