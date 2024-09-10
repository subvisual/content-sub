import type { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slug";

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
          label: "LinkedIn",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "x",
          label: "X",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "gitHub",
          label: "GitHub",
          type: "text",
          maxLength: 30,
          admin: {
            width: "25%",
          },
        },
        {
          name: "medium",
          label: "Medium",
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
}
