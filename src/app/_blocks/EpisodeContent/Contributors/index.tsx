import { AuthorPill } from "@/app/_components/AuthorPill";
import SocialLinks from "@/app/_components/SocialLinks"
export default function Contributors({ className, authors }) {
  return (
    <div className={className}>
      <p className={'outline'}>CONTRIBUTORS</p>
      {authors.map((author, i) => (
        <div>
          {/* Author has to be passed as an Array for compatibility reasons */}
          <AuthorPill authors={[author]} />
          <SocialLinks socials={author.socials} />
        </div>
      ))}
    </div>
  )
}
