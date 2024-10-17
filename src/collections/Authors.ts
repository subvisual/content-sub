import type { CollectionConfig } from "payload";

import { anyone } from "@/access/anyone";
import { slugField } from "@/fields/slug";

import { populatePublishedAt } from "@/hooks/populatePublishedAt";
import { authenticated } from "@/access/authenticated";
import { link } from "@/fields/link";

export const Authors: CollectionConfig = {
  slug: "authors",
  admin: {
    useAsTitle: "authorName",
    defaultColumns: ["authorName", "role", "slug"],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: { drafts: true },
  access: {
    read: anyone,
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
      name: "Socials",
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
  ],
};
