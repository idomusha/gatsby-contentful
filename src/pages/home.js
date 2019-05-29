import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

import '../styles/global.scss'

export default () => (
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
    <About></About>
    <Services></Services>
  </Layout>
)
