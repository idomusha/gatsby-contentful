import React from 'react'

import Nav from '../components/Nav'
import Social from '../components/Social'

import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Nav className={styles.nav} />
      <Social />
    </footer>
  )
}
