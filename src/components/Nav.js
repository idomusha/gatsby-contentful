import React from 'react'
import { Link } from 'gatsby'

import pages from '../constants/pages'

import styles from './nav.module.scss'

export default function Nav(props) {
  var classes = [styles.nav, props.className].join(' ')
  return (
    <nav className={classes}>
      {pages.map((item, index) =>
      (props.type && props.type === 'header' && item.content !== 'home')
      || (!props.type)
        ? (
          <Link key={index} to={item.path}>
            {item.content}
          </Link>
        )
        : null
      )}
    </nav>
  )
}
