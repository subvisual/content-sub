import type { GlobalConfig } from "payload/types";

import link from "../fields/link";

export const Socials: GlobalConfig = {
  slug: "socials",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "socials",
      type: "array",
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],

};
