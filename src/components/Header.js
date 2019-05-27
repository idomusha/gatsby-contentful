import React, { useState } from 'react'

import Nav from '../components/Nav'
import Social from '../components/Social'

import { FaBars } from 'react-icons/fa'
import styles from './header.module.scss'

export default function Header() {
  const [isOpen, setNavState] = useState(false)
  const toggleNav = () => {
    setNavState(isOpen => !isOpen)
  }

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={`button ${styles.headerButton}`}
        onClick={toggleNav}
      >
        <FaBars className={styles.headerIcon} />
      </button>
      <h1 className={styles.name}>idomusha</h1>
      <Nav className={`${styles.nav} ${isOpen ? styles.show : null}`} />
      <Social />
    </header>
  )
}
