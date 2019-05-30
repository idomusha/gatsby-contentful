import React from 'react'

import socials from '../../constants/socials'

import styles from './social.module.scss'

export default function Social() {
  return (
    <nav className={styles.social}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          title={item.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </nav>
  )
}
