export function getAudio(episodeFile) {
  let audioFileSource: string | undefined = undefined
  let audioFileType: string | undefined = undefined

  if ('filename' in episodeFile) {
    audioFileSource = `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${episodeFile.filename}`
  }

  if ('mimeType' in episodeFile) {
    audioFileType = episodeFile.mimeType
  }

  return { audioFileSource, audioFileType }
}
