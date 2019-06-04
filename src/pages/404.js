import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Head from '../components/Common/Head'
import Layout from '../containers/Layout'
import Banner from '../components/Common/Banner'

import styles from './404.module.scss'

export default function notFound() {
  return (
    <Layout className="full-screen">
      <Head title="Error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="button out-white">Back to home page</AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
