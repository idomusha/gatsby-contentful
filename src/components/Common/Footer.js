import React from 'react'

import Nav from './Nav'
import Social from './Social'

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav className={styles.nav} />
      <Social />
    </footer>
  )
}
