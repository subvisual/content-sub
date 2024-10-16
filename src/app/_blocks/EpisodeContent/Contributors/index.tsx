import { AuthorPill } from '@/app/_components/Authors/AuthorPills'

export default function Contributors({ className, authors }) {
  return (
    <div className={className}>
      <p className={'outline'}>CONTRIBUTORS</p>
      {authors.map((author, i) => (
        <AuthorPill large={true} author={author} key={i} />
      ))}
    </div>
  )
}
