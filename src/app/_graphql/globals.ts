import { LINK_FIELDS } from "./link";

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`;

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`;

export const FOOTER = `
  Footer {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`;

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`;


export const SETTINGS_QUERY = `
query Settings {
  Settings {
    mainHighlight {
      id
      title
      publishedAt
      categories {
        title
      }
      authors {
        name
        featuredImage {
          filename
        }
      }
    }
    secondaryHighlight {
      id
      title
      publishedAt
      categories {
        title
      }
      authors {
        name
        featuredImage {
          filename
        }
      }
    }
  }
}
`

export const SOCIALS_QUERY = `
query Socials {
  Social {
    socials {
      name
      link
    }
  }
}
`;
