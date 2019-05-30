import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from '../containers/Layout'
import Banner from '../components/Banner'

import styles from './404.module.scss'

export default function notFound() {
  return (
    <Layout className="full-screen">
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink to="/" className="button out-white">Back to home page</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
