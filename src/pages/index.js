import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import '../styles/global.scss'

export default () => (
  <>
    <Layout>
      <Hero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum"
        >
          <Link to="/portfolio" className="button out-white">
            explore portfolio
          </Link>
        </Banner>
      </Hero>
    </Layout>
  </>
)
