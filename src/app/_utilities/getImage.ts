import type { Media } from '../../payload/payload-types'

export function getImage(imageFileSource: Media): string {
  if ('filename' in imageFileSource) {
    return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${imageFileSource.filename}`
  }
  return undefined
}
