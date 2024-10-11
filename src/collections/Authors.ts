import type { CollectionConfig } from 'payload'

import { anyone } from '@/access/anyone'
import { slugField } from '@/fields/slug'

import { populatePublishedAt } from '@/hooks/populatePublishedAt'
import { authenticated } from "@/access/authenticated";

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'slug'],
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
      name: 'featuredImage',
      label: 'Picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      maxLength: 250,
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'linkedIn',
          label: 'LinkedIn Username',
          type: 'text',
          maxLength: 30,
          admin: {
            width: '25%',
          },
        },
        {
          name: 'x',
          label: 'X Username',
          type: 'text',
          maxLength: 30,
          admin: {
            width: '25%',
          },
        },
        {
          name: 'gitHub',
          label: 'GitHub Username',
          type: 'text',
          maxLength: 30,
          admin: {
            width: '25%',
          },
        },
        {
          name: 'medium',
          label: 'Medium Username',
          type: 'text',
          maxLength: 30,
          admin: {
            width: '25%',
          },
        },
      ],
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
