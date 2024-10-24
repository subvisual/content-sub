import styles from './styles.module.css'

import { AllIcon, BlogpostIcon, CaseStudiesIcon, PodcastIcon, TalksIcon } from '@/app/_icons/icons'

export function AllContent({ fill = 'var(--dark-rock-800)', textColor = 'var(--soft-white-100)' }) {
  return (
    <svg
      width="171"
      height="61"
      viewBox="0 0 171 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Change fill based on state? */}
      <path
        d="M76.6447 1H26C12.1929 1 1 12.1929 1 26V60.5H156.855C150.225 60.5 143.866 57.8661 139.178 53.1777L94.3223 8.32233C89.6339 3.63392 83.2751 1 76.6447 1Z"
        fill={fill}
      />
      <path
        d="M158.75 60.5H156.855C150.225 60.5 143.866 57.8661 139.178 53.1777L94.3223 8.32233C89.6339 3.63392 83.2751 1 76.6447 1H26C12.1929 1 1 12.1929 1 26V60.5"
        stroke="#403F4C"
      />
      <AllIcon x="35px" y="15px" width="20" height="20" color={textColor} />
      <text x="60px" y="27px" className={styles.buttonText} fill={textColor}>
        All
      </text>
    </svg>
  )
}

export function Blogposts({ fill = 'var(--sub-blue-600)', textColor = 'var(--soft-white-100)' }) {
  return (
    <svg
      width="278"
      height="61"
      viewBox="0 0 278 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59 26V35.5C59 49.3071 47.8071 60.5 34 60.5H264.355C257.725 60.5 251.366 57.8661 246.678 53.1777L201.822 8.32233C197.134 3.63392 190.775 1 184.145 1H84C70.1929 1 59 12.1929 59 26Z"
        fill={fill}
      />
      <path
        d="M34 60.5V60.5C47.8071 60.5 59 49.3071 59 35.5V26C59 12.1929 70.1929 1 84 1L184.145 1C190.775 1 197.134 3.63392 201.822 8.32233L246.678 53.1777C251.366 57.8661 257.725 60.5 264.355 60.5H264.5"
        stroke="#0083FF"
      />
      <BlogpostIcon x="85px" y="15px" width="20px" height="20px" color={textColor} />
      <text x="110px" y="27px" className={styles.buttonText} fill={textColor}>
        Blogposts
      </text>
    </svg>
  )
}

export function Podcasts({ fill = 'var(--sub-purple-600)', textColor = 'var(--soft-white-100)' }) {
  return (
    <svg
      width="278"
      height="61"
      viewBox="0 0 278 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M57.5 26V35.5C57.5 49.3071 46.3071 60.5 32.5 60.5H265.355C258.725 60.5 252.366 57.8661 247.678 53.1777L202.822 8.32233C198.134 3.63392 191.775 1 185.145 1H82.5C68.6929 1 57.5 12.1929 57.5 26Z"
        fill={fill}
      />
      <path
        d="M32.5 60.5V60.5C46.3071 60.5 57.5 49.3071 57.5 35.5V26C57.5 12.1929 68.6929 1 82.5 1L185.145 1C191.775 1 198.134 3.63392 202.822 8.32233L247.929 53.4289C252.456 57.9565 258.597 60.5 265 60.5V60.5"
        stroke="#4801EC"
      />
      <PodcastIcon x="90px" y="15px" width="20px" height="20px" color={textColor} />
      <text x="115px" y="27px" className={styles.buttonText} fill={textColor}>
        Podcasts
      </text>
    </svg>
  )
}

export function CaseStudies({
  fill = 'var(--sub-orange-800)',
  textColor = 'var(--soft-white-100)',
}) {
  return (
    <svg
      width="307"
      height="61"
      viewBox="0 0 307 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59 26V35.5C59 49.3071 47.8071 60.5 34 60.5H293.855C287.225 60.5 280.866 57.8661 276.178 53.1777L231.322 8.32233C226.634 3.63392 220.275 1 213.645 1H84C70.1929 1 59 12.1929 59 26Z"
        fill={fill}
      />
      <path
        d="M34 60.5V60.5C47.8071 60.5 59 49.3071 59 35.5V26C59 12.1929 70.1929 1 84 1L213.645 1C220.275 1 226.634 3.63392 231.322 8.32233L276.429 53.4289C280.956 57.9565 287.097 60.5 293.5 60.5V60.5"
        stroke="#F36312"
      />
      <CaseStudiesIcon x="90px" y="15px" width="20px" height="20px" color={textColor} />
      <text x="115px" y="27px" className={styles.buttonText} fill={textColor}>
        Case Studies
      </text>
    </svg>
  )
}

export function Talks({ fill = 'var(--sub-purple-300)', textColor = 'var(--soft-white-100)' }) {
  return (
    <svg
      width="315"
      height="61"
      viewBox="0 0 315 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 26V35.5C25 49.3071 13.8071 60.5 0 60.5H314.855C308.225 60.5 301.866 57.8661 297.178 53.1777L252.322 8.32233C247.634 3.63392 241.275 1 234.645 1H50C36.1929 1 25 12.1929 25 26Z"
        fill={fill}
      />
      <path
        d="M0 60.5V60.5C13.8071 60.5 25 49.3071 25 35.5V26C25 12.1929 36.1929 1 50 1L234.645 1C241.275 1 247.634 3.63392 252.322 8.32233L297.178 53.1777C301.866 57.8661 308.225 60.5 314.855 60.5H315"
        stroke="#9563FF"
      />
      <TalksIcon x="55px" y="15px" width="20px" height="20px" color={textColor} />
      <text x="80px" y="27px" className={styles.buttonText} fill={textColor}>
        Talks & Roundtables
      </text>
    </svg>
  )
}
