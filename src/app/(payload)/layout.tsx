/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import configPromise from "@payload-config";
import "@payloadcms/next/css";
import { RootLayout } from "@payloadcms/next/layouts";
import React from "react";

import "./custom.scss";
import { importMap } from "./admin/importMap";

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => (
  <>
    <head>
      <link rel="icon" href="https://cdn.prod.website-files.com/60fec5603634b635fcde315a/616efcb7df44b813d76f2e1e_favicon.png" sizes="32x32" />
      <link rel="icon" href="https://raw.githubusercontent.com/subvisual/content-sub/refs/heads/main/public/media/sublogo.png" type="image/svg+xml" />
    </head>
    <RootLayout importMap={importMap} config={configPromise}>
      {children}
    </RootLayout></>
);

export default Layout;
