import React from 'react'
import { Link } from 'gatsby'

import page from '../constants/page'

import styles from './nav.module.scss'

export default function Nav(props) {
  var className = [styles.nav, props.className].join(' ')
  return (
    <nav className={className}>
      {page.map((item, index) => (
        <Link key={index} to={item.path}>
          {item.content}
        </Link>
      ))}
    </nav>
  )
}
