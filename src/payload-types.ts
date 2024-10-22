/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    media: Media;
    categories: Category;
    users: User;
    authors: Author;
    blogposts: Blogpost;
    podcasts: Podcast;
    'talks-and-roundtables': TalksAndRoundtable;
    'case-studies': CaseStudy;
    redirects: Redirect;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    header: Header;
    footer: Footer;
    socials: Social;
    'homepage-settings': HomepageSetting;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title: string;
  parent?: (string | null) | Category;
  breadcrumbs?:
    | {
        doc?: (string | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "authors".
 */
export interface Author {
  id: string;
  featuredImage?: (string | null) | Media;
  authorName: string;
  role: string;
  bio: string;
  socials?: {
    linkedIn?:
      | {
          url?: string | null;
          id?: string | null;
        }[]
      | null;
    x?:
      | {
          url?: string | null;
          id?: string | null;
        }[]
      | null;
    github?:
      | {
          url?: string | null;
          id?: string | null;
        }[]
      | null;
    medium?:
      | {
          url?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  publishedAt?: string | null;
  slug?: string | null;
  slugLock?: boolean | null;
  meta?: {
    title?: string | null;
    image?: (string | null) | Media;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogposts".
 */
export interface Blogpost {
  id: string;
  title: string;
  summary: string;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  content_html?: string | null;
  featuredImage?: (string | null) | Media;
  authors: (string | Author)[];
  categories?: (string | Category)[] | null;
  related?: (string | Blogpost)[] | null;
  publishedAt?: string | null;
  slug?: string | null;
  slugLock?: boolean | null;
  meta?: {
    title?: string | null;
    image?: (string | null) | Media;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "podcasts".
 */
export interface Podcast {
  id: string;
  title: string;
  summary: string;
  notes: string;
  featuredImage?: (string | null) | Media;
  episodeFile: string | Media;
  spotify?: string | null;
  apple?: string | null;
  authors: (string | Author)[];
  categories: (string | Category)[];
  related?: (string | Podcast)[] | null;
  publishedAt?: string | null;
  slug?: string | null;
  slugLock?: boolean | null;
  meta?: {
    title?: string | null;
    image?: (string | null) | Media;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "talks-and-roundtables".
 */
export interface TalksAndRoundtable {
  id: string;
  title: string;
  summary: string;
  categories?: (string | Category)[] | null;
  url?: string | null;
  authors?: (string | Author)[] | null;
  publishedAt?: string | null;
  featuredImage?: (string | null) | Media;
  slug?: string | null;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "case-studies".
 */
export interface CaseStudy {
  id: string;
  title?: string | null;
  summary?: string | null;
  authors?: (string | Author)[] | null;
  categories?: (string | Category)[] | null;
  publishedAt?: string | null;
  featuredImage: string | Media;
  slug?: string | null;
  slugLock?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: string;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'authors';
          value: string | Author;
        } | null)
      | ({
          relationTo: 'blogposts';
          value: string | Blogpost;
        } | null)
      | ({
          relationTo: 'podcasts';
          value: string | Podcast;
        } | null)
      | ({
          relationTo: 'talks-and-roundtables';
          value: string | TalksAndRoundtable;
        } | null)
      | ({
          relationTo: 'case-studies';
          value: string | CaseStudy;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'categories';
        value: string | Category;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'authors';
        value: string | Author;
      } | null)
    | ({
        relationTo: 'blogposts';
        value: string | Blogpost;
      } | null)
    | ({
        relationTo: 'podcasts';
        value: string | Podcast;
      } | null)
    | ({
        relationTo: 'talks-and-roundtables';
        value: string | TalksAndRoundtable;
      } | null)
    | ({
        relationTo: 'case-studies';
        value: string | CaseStudy;
      } | null)
    | ({
        relationTo: 'redirects';
        value: string | Redirect;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "socials".
 */
export interface Social {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage-settings".
 */
export interface HomepageSetting {
  id: string;
  mainHighlight?:
    | ({
        relationTo: 'blogposts';
        value: string | Blogpost;
      } | null)
    | ({
        relationTo: 'podcasts';
        value: string | Podcast;
      } | null)
    | ({
        relationTo: 'talks-and-roundtables';
        value: string | TalksAndRoundtable;
      } | null);
  secondaryHighlight?:
    | ({
        relationTo: 'blogposts';
        value: string | Blogpost;
      } | null)
    | ({
        relationTo: 'podcasts';
        value: string | Podcast;
      } | null)
    | ({
        relationTo: 'talks-and-roundtables';
        value: string | TalksAndRoundtable;
      } | null);
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CodeBlock".
 */
export interface CodeBlock {
  language?: ('typescript' | 'javascript' | 'css') | null;
  code: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'code';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}