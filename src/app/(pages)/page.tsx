import PageTemplate from './[slug]/page'
import { Metadata } from "next";

export const dynamic = 'auto'
export const revalidate = 10

export default PageTemplate

export function generateMetadata() : Metadata {
  return {
    title: 'Subvisual Content Hub Home'
  }
}
