import CodeIcon, { RSSIcon } from "@/app/_icons/icons";

export default function RSSFeed({ className }) {
  return (
    <div className={className}>
      <p><RSSIcon />RSS Feed</p>
      <p><CodeIcon />Copy</p>
    </div>
  );
}
