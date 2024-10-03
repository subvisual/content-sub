export default function ArchiveButton({ collection, color }: { collection: string, color: string }) {
  function formatArchiveButton(text: string): string {
    // TODO: Extend to format talks-and-roundtables to Talks & Roundtables
    // TODO: Extend to fromat case-studies to Case Studies

    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <a href={`/${collection}`}
       style={{ color: color ? color : "var(--dark-rock-800)" }}>
      {formatArchiveButton(collection)}
    </a>
  );
}
