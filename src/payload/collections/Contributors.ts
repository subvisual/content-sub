import type { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slug";
import { anyone } from "../access/anyone";

export const Contributors: CollectionConfig = {
  slug: "contributors",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "bio"],
  },
  fields: [
    {
      name: "featuredImage",
      label: "Picture",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "role",
      type: "select",
      required: true,
      admin: {
        isClearable: true,
      },
      options: [
        {
          label: "Developer",
          value: "developer",
        },
        {
          label: "Product Manager",
          value: "product-manager",
        },
        {
          label: "Designer",
          value: "designer",
        },
      ],
    },
    {
      name: "bio",
      type: "textarea",
      maxLength: 250,
      required: true,
      admin: {
        description: ({ path, value }) =>
          `${typeof value === "string" ? 250 - value.length : "250"} characters left (field: ${path})`,
      },
    },
    {
      type: "row",
      fields: [
        {
          name: "linkedIn",
          label: "LinkedIn Username",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "x",
          label: "X Username",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "gitHub",
          label: "GitHub Username",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "medium",
          label: "Medium Username",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
      ],
    },
    slugField(),
  ],
};
