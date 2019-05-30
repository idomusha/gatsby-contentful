import React, { useState } from 'react'
import { Link, useStaticQuery/* , StaticQuery */, graphql } from 'gatsby'

import Nav from './Nav'
import Social from './Social'

import pages from '../../constants/pages'

import { FaBars } from 'react-icons/fa'
import styles from './header.module.scss'

export default function Header() {
  const [isOpen, setNavState] = useState(false)
  const toggleNav = () => {
    setNavState(isOpen => !isOpen)
  }

  const getSiteData = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
  `

  const {
    site: {
      siteMetadata
    }
  } = useStaticQuery(getSiteData)

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
          <h1 className={styles.name}>{siteMetadata.title}</h1>
          {/* <StaticQuery query={getSiteData} render={({site: {siteMetadata}}) => (
            <h1 className={`color-primary ${styles.name}`}>{siteMetadata.title}</h1>
          )} /> */}
          </Link>
        )
      )}
      <Nav className={`${styles.nav} ${isOpen ? styles.show : null}`} type="header" />
      <Social />
    </header>
  )
}
