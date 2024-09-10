import type { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slug";

import { adminsOrPublished } from "../access/adminsOrPublished";
import { admins } from "../access/admins";

export const BlogPosts: CollectionConfig = {
  slug: "blogposts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  versions: { drafts: true },
  access: {
    read: adminsOrPublished,
    update: adminsOrPublished,
    create: admins,
    delete: admins,
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
      admin: {
        description: ({ path, value }) =>
          `${typeof value === "string" ? 250 - value.length : "250"} characters left (field: ${path})`,
      },
    },
    {
      name: "content",
      label: "Content",
      type: "richText",
      required: true,
    },
    {
      name: "featuredImage",
      label: "Featured Image",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "contributors",
      label: "Contributors",
      type: "relationship",
      relationTo: "contributors",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "category",
      label: "Category",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "blogposts",
      hasMany: true,
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
    slugField(),
  ],
}
