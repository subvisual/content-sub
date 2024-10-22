import { Banner } from '@payloadcms/ui/elements/Banner'
import styles from './styles.module.css'

const linkProps = {
  target:"_blank",
  rel:"noopener noreferrer"
}

const repoLink = 'https://github.com/subvisual/content-sub/tree/main/public/media'
const loomLink = 'https://www.loom.com/share/32ad2349f0d743f0aaf72b02314396e1?sid=367067d4-1051-430f-9583-e56ad28e6a94'

export default function BeforeDashboard() {
  return (
    <div className={styles.container}>
      <Banner type="success">
        <h4>Welcome to the dashboard!</h4>
      </Banner>
      <h4>This is where you can create / delete / update content that will appear on the Content Hub</h4>
      <br/>
      <h4>You can find a quick tutorial / demonstration of the plaftorm <a href={loomLink} {...linkProps}>here</a>.</h4>
      <br/>
      <h3>Noteworthy:</h3>
      <ul>
        <li>
          Media you create is automacatically pushed and stored to <a href={repoLink} {...linkProps}>Github</a>
        </li>
        <li>
          Homepage Settings defines what content is displayed on the top of the Content Hub homepage, do not forget
          to <a href={'./admin/globals/homepage-settings'} {...linkProps}>set them up</a>.
        </li>
        <li>
          The Footer and Banner include the navigation links to different Subvisual pages. They are pre-set but can be changed on
          the <a href={'./admin/globals/header'} {...linkProps}>Header</a> and <a href={'./admin/globals/footer'} {...linkProps}>Footer</a> settings.
        </li>
        <li>
          The same thing applies to <a href={'./admin/globals/socials'} {...linkProps}>Socials</a>.
        </li>
      </ul>
    </div>
)
}

