import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import getVideoId from "get-video-id";
import BackButton from "@/app/_components/BackButton";
import ArchiveButton from "@/app/_components/ArchiveButton";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import Share from "@/app/_components/Share";
import Categories from "@/app/_components/Categories";
import AuthorPill from "@/app/_components/AuthorPill";
import styles from "./styles.module.css";
import SocialLinks from "@/app/_components/SocialLinks";
import { Subscribe } from "@/app/_blocks/Subscribe";

export const dynamic = "force-dynamic";

export default async function TalksAndRoundTablesPage({ params: paramsPromise }) {
  const { slug } = await paramsPromise;

  const talk = await fetchContentBySlug({
    slug: slug,
    type: "talks-and-roundtables",
  });

  // move this to the collection / store in db?
  // @ts-ignore
  const videoID = getVideoId(talk.url);

  return (
    <div>
      {/*{<pre>{JSON.stringify(talk, null, 2)}</pre>}*/}
      {/* Head Block */}
      <div className={styles.headContainer}>
        <BackButton color={"var(--soft-white-100)"} />
        <ArchiveButton collection={"talks-and-roundtables"} color={"var(--soft-white-100)"} />
        <h5>{talk.title}</h5>
        <p>
          {formatDateTime(talk.publishedAt)}
          <span>Duration in mins</span>
        </p>

      </div>
      <div className={styles.contentContainer}>

        {/* Contributors column*/}
        <div className={styles.contributors}>
          <p className={'overline'}>
            CONTRIBUTORS
          </p>
          {talk.authors.map((author) => (
            <>
              <AuthorPill author={author} />
              {/* TODO: Enable once most recent PR hits main */}
              {/*<SocialLinks socials={author.socials} />*/}
            </>
          ))}
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
          <p>{talk.summary}</p>
        </div>

        {/*  Share & categories column */}
        <div className={styles.sharingAndCategories}>
          <Share />
          {talk.categories.length > 0 && (
            <Categories categories={talk.categories} />
          )}
        </div>
      </div>
      <Subscribe />

    </div>
  );
}
