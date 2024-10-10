import Link from 'next/link'
import styles from './styles.module.css'
import { fetchGlobals } from "@/app/_utilities/contentFetchers";

export async function Footer() {
  const footer = await fetchGlobals('footer')

  // @ts-ignore
  const navItems = footer?.navItems || []

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <p className={styles.title}>Go To</p>
          <div className={styles.goToNav}>
            {navItems.map(({ link }, i) => {
              return (
                <Link className={styles.link} key={i} href={link.url}>
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
        <div>
          {/* TODO: Update fetchGlobals to include socials and then update here. */}
          <p className={styles.title}>We&#39;re Social</p>
          {['Md', 'Md', 'Md', 'Md', 'Md', 'Md', 'Md', 'Md'].map((item, i) => {
            return <span style={{ marginRight: '20px' }}>{item}</span>
          })}
        </div>
        <div>
          <p className={styles.title}>Contact Us</p>
          <a href={'mailto:contact@subvisual.com'}>
            <p>contact@subvisual.com</p>
          </a>
        </div>
        <div>
          <p className={styles.title}>Offices</p>
          <p>
            Remote. Work anywhere in Europe.
            <br />
            Or join our mothership, landed in Braga, Portugal
          </p>
        </div>
      </footer>
    </div>
  )
}
