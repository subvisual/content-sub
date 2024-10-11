import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'
import { adminsOrPublished } from '../access/adminsOrPublished'
import { slugField } from '../fields/slug'

export const TalksAndRoundtables: CollectionConfig = {
  slug: 'talks-and-roundtables',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      maxLength: 250,
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === 'string' ? 250 - value.length : '250'
          } characters left (field: ${path})`,
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'url',
      type: 'text',
    },
    {
      name: 'authors',
      type: 'relationship',
      relationTo: 'authors',
      hasMany: true,
      admin: {
        position: 'sidebar',
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
    slugField(),
  ],
}
