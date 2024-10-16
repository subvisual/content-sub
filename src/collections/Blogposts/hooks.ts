import type {CollectionAfterChangeHook} from "payload";

import {revalidatePath} from "next/cache";

import type {Blogpost} from "@/payload-types";

export const revalidatePost: CollectionAfterChangeHook<Blogpost> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/blogposts/${doc.slug}`

    payload.logger.info(`Revalidating blogpost at path: ${path}`)

    revalidatePath(path)
  }

  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const oldPath = `/posts/${previousDoc.slug}`

    payload.logger.info(`Revalidating old blogpost at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc

}
