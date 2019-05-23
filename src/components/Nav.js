import React, { useState } from 'react'
import { Link } from 'gatsby'

import page from '../constants/page'

import styles from './nav.module.css'

export default function Nav(props) {
  return (
    <nav
      className={
        props.active ? `${styles.nav} ${styles.show}` : `${styles.nav}`
      }
    >
      {page.map((item, index) => (
        <Link key={index} to={item.path}>{item.content}</Link>
      ))}
    </nav>
  )
}
