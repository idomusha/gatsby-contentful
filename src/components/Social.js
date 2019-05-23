import React from 'react'
import { Link } from 'gatsby'

import social from '../constants/social'

import styles from './nav.module.css'

export default function Social() {
  return (
    <nav className={styles.social}>
      {social.map((item, index) => (
        <a key={index} href={item.url} title={item.name} target="_blank">
          {item.icon}
        </a>
      ))}
    </nav>
  )
}
