import React from 'react'
// TODO: https://medium.com/free-code-camp/how-to-animate-page-transitions-in-gatsby-js-b36e3ae14c29

import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'

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
