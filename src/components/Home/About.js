import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Title from '../Common/Title'

import styles from './about.module.css'

export default function About() {

  const { aboutImage } = useStaticQuery(graphql`
    {
      aboutImage: file(relativePath: {eq: "default.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <section className={styles.about}>
      <Title content="about me" highlight={['about']} />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} alt="" />
          </div>
        </article>
        <article className={styles.aboutContent}>
          <h4>explore the difference</h4>
          <p>Known thee another be each hour many rhyme talethis was. And not.</p>
          <p>Een the once deeds passed if seek bidding woe, eremites pollution day deadly strength. With little like neer he one.</p>
          <button type="button" className="button in-primary">Read more</button>
        </article>
      </div>

    </section>
  )
}
