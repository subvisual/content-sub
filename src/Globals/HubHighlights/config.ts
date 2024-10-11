import type { GlobalConfig } from "payload";

export const HomePageSettings: GlobalConfig = {
    slug: "homepage-settings",
    access: {
      read: () => true,
    },
    fields: [
      {
        name: "mainHighlight",
        label: "Main Highlight",
        type: "relationship",
        relationTo: "blogposts",
      },
      {
        name: "secondaryHighlight",
        label: "Secondary Highlight",
        type: "relationship",
        relationTo: "blogposts",
      },
    ],
  }
