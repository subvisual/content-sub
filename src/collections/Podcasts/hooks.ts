import type {CollectionAfterChangeHook} from "payload";

import {revalidatePath} from "next/cache";

import type {Podcast} from "@/payload-types";

export const revalidatePodcast: CollectionAfterChangeHook<Podcast> = ({
  doc,
  previousDoc,
  req: { payload },
}) => {
  if (doc._status === 'published') {
    const path = `/podcasts/${doc.slug}`

    payload.logger.info(`Revalidating podcast at path: ${path}`)

    revalidatePath(path)
  }

  if (previousDoc?._status === 'published' && doc._status !== 'published') {
    const oldPath = `/podcasts/${previousDoc.slug}`

    payload.logger.info(`Revalidating old podcast at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc

}
