interface AudioFile {
  audioFileSource: string | undefined
  audioFileType: string | undefined
}

export function getAudio(episodeFile: { filename?: string; mimeType?: string }): AudioFile {
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
