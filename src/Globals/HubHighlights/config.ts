import type { GlobalConfig } from "payload";
import { link } from "@/fields/link";
import { revalidateFooter } from "@/Footer/hooks/revalidateFooter";

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
