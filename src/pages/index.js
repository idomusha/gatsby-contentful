import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../containers/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

import '../styles/global.scss'

export default ({ data, location: { pathname }}) => {
  console.log('pathname', pathname)
  return (
    <Layout>
      <Hero page={pathname} image={data.aboutBackgroundImage.childImageSharp.fluid}>
        <Banner
          title="continue exploring"
          info="Friend at bliss will loved feere thou. A as he was him heart nine childe them. To below feel the given as with heavenly, ah deadly go could harold misery. A were strength visit pride start. Gild peace low deadly to wight, den by knew his vexed he his bower."
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
}

export const query = graphql`
{
  aboutBackgroundImage: file(relativePath: {eq: "default.jpg"}) {
    childImageSharp {
      fluid(maxWidth: 4160, quality: 90) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`