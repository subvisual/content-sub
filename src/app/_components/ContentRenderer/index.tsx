export default function ContentRenderer({ content_html }: { content_html: string }){
  return (
    <div dangerouslySetInnerHTML={{ __html: content_html }}/>
  )
}
