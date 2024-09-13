export function getImage(imageFileSource: any) {
  if ("filename" in imageFileSource) {
    return `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${imageFileSource.filename}`;
  }
  return undefined;
};
