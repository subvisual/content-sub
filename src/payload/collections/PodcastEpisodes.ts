import { CollectionConfig } from "payload/types";

import { admins } from "../access/admins";
import { adminsOrPublished } from "../access/adminsOrPublished";

import { slugField } from "../fields/slug";


// TODO: Add hooks;
// TODO: Add preview;

export const PodcastEpisodes: CollectionConfig = {
  slug: "podcast-episodes",
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
      name: "episodeSummary",
      label: "Episode Summary",
      type: "textarea",
      required: true,
    },
    {
      name: "episodeNotes",
      label: "Episode Notes",
      type: "textarea",
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
          label: "Spotify Link",
          type: "text",
          maxLength: 30,
          admin: {
            width: "50%",
          },
        },
        {
          name: "apple",
          label: "Apple Podcasts Link",
          type: "text",
          maxLength: 30,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "contributors",
      label: "Contributors",
      type: "relationship",
      relationTo: "contributors",
      hasMany: true,
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
      name: "relatedEpisodes",
      type: "relationship",
      relationTo: "podcast-episodes",
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
    slugField(),
  ],
};
