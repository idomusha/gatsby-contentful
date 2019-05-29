import React, { useState } from 'react'
import { Link } from 'gatsby'

import Nav from '../components/Nav'
import Social from '../components/Social'

import pages from '../constants/pages'

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
        className={`button ${styles.buttonNav}`}
        onClick={toggleNav}
      >
        <FaBars className={styles.iconNav} />
      </button>
      {pages.map((item, index) =>
      (item.content === 'home') &&
        (
          <Link className={`button transparent lowercase ${styles.buttonHome}`} key={index} to={item.path}>
          <h1 className={styles.name}>idomusha</h1>
          </Link>
        )
      )}
      <Nav className={`${styles.nav} ${isOpen ? styles.show : null}`} type="header" />
      <Social />
    </header>
  )
}
