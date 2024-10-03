import type { GlobalConfig } from 'payload/types'

export const Settings: GlobalConfig = {
  slug: 'settings',
  typescript: {
    interface: 'Settings',
  },
  graphQL: {
    name: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'mainHighlight',
      type: 'relationship',
      relationTo: 'blogposts',
      label: 'Main Highlight',
    },
    {
      name: 'secondaryHighlight',
      type: 'relationship',
      relationTo: 'blogposts',
      label: 'Secondary Highlight',
    },
  ],
}
