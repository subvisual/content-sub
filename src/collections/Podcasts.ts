import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { authenticated } from "@/access/authenticated";

// TODO: Add preview;

export const Podcasts: CollectionConfig = {
  slug: 'podcasts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: { drafts: true },
  access: {
    read: authenticatedOrPublished,
    update: authenticatedOrPublished,
    create: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      label: 'Episode Summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'notes',
      label: 'Episode Notes',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      label: 'Featured Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'episodeFile',
      label: 'Episode File',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'spotify',
          label: 'Spotify CMSLink',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'apple',
          label: 'Apple Podcasts CMSLink',
          type: 'text',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true,
      required: true,
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'relatedEpisodes',
      type: 'relationship',
      relationTo: 'podcasts',
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        }
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    ...slugField(),
  ],
}
