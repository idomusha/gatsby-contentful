import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

import styles from './404.module.scss'

export default function notFound() {
  return (
    <Layout className="full-screen">
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="button out-white">Back to home page</Link>
        </Banner>
      </header>
    </Layout>
  )
}
