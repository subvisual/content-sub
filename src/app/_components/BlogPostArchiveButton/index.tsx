export default function ArchiveButton({ collection }: { collection: string }) {
  function formatArchiveButton(text: string): string {
    // TODO: Extend to format talks-and-roundtables to Talks & Roundtables
    // TODO: Extend to fromat case-studies to Case Studies

    return text.charAt(0).toLowerCase() + text.slice(1)
  }

  return (
    <div>
      <a href={`/${collection}`}>{formatArchiveButton(collection)}</a>
    </div>
  )
}
