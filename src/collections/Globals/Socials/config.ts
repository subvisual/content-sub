import type { GlobalConfig } from "payload";
import { link } from "@/fields/link";
import { revalidateSocials } from "@/collections/Globals/Socials/hooks";

export const Socials: GlobalConfig = {
  slug: "socials",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 10,
    },
  ],
  hooks: {
    afterChange: [revalidateSocials],
  },
};
