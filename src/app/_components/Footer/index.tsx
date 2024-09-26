import Link from 'next/link'

import { Footer } from '../../../payload/payload-types'
import { fetchFooter } from '../../_api/fetchGlobals'
import styles from './styles.module.css'

export async function Footer() {
  let footer: Footer | null = null

  try {
    footer = await fetchFooter()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the footer without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

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
          <p className={styles.title}>We're Social</p>
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
