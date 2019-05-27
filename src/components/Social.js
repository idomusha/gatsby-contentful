import React from 'react'

import social from '../constants/social'

import styles from './social.module.scss'

export default function Social() {
  return (
    <nav className={styles.social}>
      {social.map((item, index) => (
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
