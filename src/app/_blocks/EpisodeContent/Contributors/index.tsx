import { AuthorPill } from "@/app/_components/Authors/AuthorPills";
import SocialLinks from "@/app/_components/SocialLinks";

export default function Contributors({ className, authors }) {
  return (
    <div className={className}>
      <p className={"outline"}>CONTRIBUTORS</p>
      {authors.map((author, i) => (
          <>
            <AuthorPill author={author} key={i} />

            <SocialLinks socials={author.socials} />
          </>
        ),
      )}
    </div>
  );
}
