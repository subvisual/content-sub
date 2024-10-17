import React from 'react'
import { Metadata } from 'next'

import { Footer } from '../_components/Footer'
import { Header } from '../_components/Header'
import { mergeOpenGraph } from '../_utilities/mergeOpenGraph'

import '../_css/globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://cdn.prod.website-files.com/60fec5603634b635fcde315a/616efcb7df44b813d76f2e1e_favicon.png" sizes="32x32" />
        <link rel="icon" href="https://raw.githubusercontent.com/subvisual/content-sub/refs/heads/main/public/media/sublogo.png" type="image/svg+xml" />
      </head>
      <body>
        {/*<Header />*/}
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  openGraph: mergeOpenGraph(),
}
