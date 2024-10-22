import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import getVideoId from "get-video-id";
import BackButton from "@/app/_components/BackButton";
import ArchiveButton from "@/app/_components/ArchiveButton";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import Share from "@/app/_components/Share";
import Categories from "@/app/_components/Categories";
import styles from "./styles.module.css";
import { Subscribe } from "@/app/_blocks/Subscribe";
import Contributors from "@/app/_blocks/EpisodeContent/Contributors";
import { TalksAndRoundtable } from "@/payload-types";
import { Metadata } from "next";
import { generateMeta } from "@/utilities/generateMeta";
import { Header } from "@/app/_components/Header";

export const dynamic = "force-dynamic";

const headerStyle = {
  '--dynamic-background': 'var(--sub-purple-50)',
  '--dynamic-color': 'var(--dark-rock-800)',
  '--dynamic-width': 'calc(100% - 40px)',
}

export default async function TalksAndRoundTablesPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise;

  // @ts-expect-error
  const talk: TalksAndRoundtable = await fetchContentBySlug({
    slug: slug,
    type: "talks-and-roundtables",
  });

  const { title, authors, summary, url, publishedAt, categories } = talk;

  // move this to the collection / store in db?
  // @ts-ignore
  const videoID = getVideoId(talk.url);

  return (

    <div>
      <Header style={headerStyle}/>
      {/* Head Block */}
      <div className={styles.headContainer}>
        <BackButton color={"var(--soft-white-100)"} />
        <ArchiveButton collection={"talks-and-roundtables"} color={"var(--soft-white-100)"} />
        {/* @ts-ignore */}
        <h5>{title}</h5>
        <p>
          {/* @ts-ignore */}
          {formatDateTime(publishedAt)}
          <span>Duration in mins</span>
        </p>

      </div>
      <div className={styles.contentContainer}>

        {/* Contributors column*/}
        <div>
          <Contributors className={styles.contributors} authors={authors} />
          {/* @ts-ignore */}

        </div>

        {/* Content column */}
        <div className={styles.videoPlayer}>
          {videoID.service === "youtube" && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoID.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}
          <h5>About</h5>
          {/* @ts-ignore */}
          <p>{summary}</p>
        </div>

        {/*  Share & categories column */}
        <div className={styles.sharingAndCategories}>
          <Share />
          {/* @ts-ignore */}
          {categories.length > 0 && (
            // @ts-ignore
            <Categories categories={categories} />
          )}
        </div>
      </div>
      <Subscribe />

    </div>
  );
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug } = await paramsPromise;
  const talk = await fetchContentBySlug({
    slug: slug,
    type: "talks-and-roundtables",
  });
  // @ts-ignore
  return generateMeta({ doc: talk });
}
