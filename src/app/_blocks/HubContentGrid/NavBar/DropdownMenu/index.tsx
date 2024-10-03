import { useState } from 'react'

import {
  AllIcon,
  BlogpostIcon,
  CaseStudiesIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  PodcastIcon,
  TalksIcon,
} from '../../../../_icons/icons'
import { ContentTypeArrays } from '../../../../_interfaces/ContentTypeArrays'
import styles from './styles.module.css'

const iconMap = {
  All: <AllIcon width={'16'} stroke={'black'} />,
  Blogposts: <BlogpostIcon width={'16'} />,
  PodcastEpisodes: <PodcastIcon width={'16'} stroke={'black'} />,
  CaseStudies: <CaseStudiesIcon width={'16'} stroke={'black'} />,
  TalksAndRoundtables: <TalksIcon width={'16'} fill={'black'} />,
}

const labelMap = {
  All: 'All',
  Blogposts: 'Blogposts',
  PodcastEpisodes: 'Podcasts',
  CaseStudies: 'Case Studies',
  TalksAndRoundtables: 'Talks & Roundtables',
}

export default function DropdownMenu({
  activeButton,
  onActiveButtonChange,
}: {
  activeButton: string
  onActiveButtonChange: () => void
}) {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false)
  const [buttonLabel, setButtonLabel] = useState('All')

  const handleButtonClick = (buttonName: keyof ContentTypeArrays | 'All') => {
    onActiveButtonChange(buttonName)
    setIsDropdownActive(false)
    setButtonLabel(labelMap[buttonName])
  }

  return (
    <div className={styles.dropdownContainer}>
      <svg
        width=""
        height="62"
        viewBox="0 0 277 62"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 61L1 26C1 12.1929 12.1929 1 26 1L211.446 1C220.173 1 228.269 5.55102 232.804 13.007L254.696 48.993C259.231 56.449 267.327 61 276.054 61H276.5"
          stroke="black"
        />
      </svg>
      <button
        className={styles.dropdownButton}
        onClick={() => setIsDropdownActive(!isDropdownActive)}
      >
        {iconMap[activeButton]} {buttonLabel}
        {isDropdownActive ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {isDropdownActive && (
        <div className={styles.dropdownMenuContainer}>
          <div className={styles.dropdownMenu}>
            <ul>
              <li onClick={() => handleButtonClick('All')}>{iconMap['All']} All</li>
              <li onClick={() => handleButtonClick('Blogposts')}>
                {iconMap['Blogposts']} Blogposts
              </li>
              <li onClick={() => handleButtonClick('PodcastEpisodes')}>
                {iconMap['PodcastEpisodes']} Podcasts
              </li>
              <li onClick={() => handleButtonClick('CaseStudies')}>
                {iconMap['CaseStudies']} Case Studies
              </li>
              <li onClick={() => handleButtonClick('TalksAndRoundtables')}>
                {iconMap['TalksAndRoundtables']} Talks & Roundtables
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
