import type { Media } from '@/payload-types'

export function getImage(imageFileSource: string | Media): string {
  // @ts-ignore
  if ('filename' in imageFileSource) {
    return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${imageFileSource.filename}`
  }
  return 'not found'
}
