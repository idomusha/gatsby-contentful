import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from './layout.module.scss'

export default function Layout(props) {
  var classes = [styles.layout, props.className].join(' ')
  return (
    <div className="page">
      <Header />
      <main className={classes}>
        {props.children}
      </main>
      <Footer />
    </div>
  )
}
