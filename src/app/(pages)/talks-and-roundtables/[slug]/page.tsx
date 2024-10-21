import { fetchContentBySlug } from "@/app/_utilities/contentFetchers";
import getVideoId from "get-video-id";
import BackButton from "@/app/_components/BackButton";
import ArchiveButton from "@/app/_components/ArchiveButton";
import { formatDateTime } from "@/app/_utilities/formatDateTime";
import Share from "@/app/_components/Share";
import Categories from "@/app/_components/Categories";
import AuthorPill from "@/app/_components/AuthorPill";
import Authors from "@/app/_components/Authors";
import SocialLinks from "@/app/_components/SocialLinks";

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
      <div>
        <BackButton />
        <ArchiveButton collection={"talks-and-roundtables"} />
        <p>
          {formatDateTime(talk.publishedAt)}
          Duration in mins
        </p>

      </div>

      {/* Contributors column*/}
      <div>
        {talk.authors.map((author) => (
          <>
            <AuthorPill author={author} />
            {/* TODO: Enable once most recent PR hits main */}
            {/*<SocialLinks socials={author.socials} />*/}
          </>
        ))}


      </div>

      {/* Content column */}
      <div>
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
      </div>

      {/*  Share & categories column */}
      <div>
        <Share />
        {talk.categories.length > 0 && (
          <Categories categories={talk.categories} />
        )}
      </div>

    </div>
  );
}
