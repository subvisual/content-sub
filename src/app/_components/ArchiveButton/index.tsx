import { BlogpostIcon, CaseStudiesIcon, PodcastIcon, TalksIcon } from "@/app/_icons/icons";

const iconMap = {
  blogposts: <BlogpostIcon width={'20'}/>,
  "podcast-episodes": <PodcastIcon width={'20'}/>,
  casestudies: <CaseStudiesIcon width={'20'}/>,
  "talks-and-roundtables": <TalksIcon width={'20'}/>,
};

import styles from './styles.module.css'
function formatTitle(text) {
  return text.replace(/\band\b/g, "&")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function ArchiveButton({
                                        collection,
                                        color,
                                      }: {
  collection: string
  color?: string
}) {
  return (
    <a href={`/${collection}`} style={{ color: color ? color : "var(--dark-rock-800)" }}>
      <div className={styles.container}>
        {iconMap[collection]} {formatTitle(collection)}
      </div>
    </a>
  );
}
