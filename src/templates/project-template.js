import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from '../containers/Layout'
import Hero from '../components/Common/Hero'
import Task from '../components/Project/Task'

import { FaMap } from 'react-icons/fa'
import styles from './template.module.scss'

export default function Template({ data, location: { pathname } }) {

  const { name, country, days, description: { description }, images, start, journey: tasks } = data.project

  const [ mainProjectImage, ...projectImages ] = images
  console.log(data)
  return (
    <Layout>
      <Hero page={pathname} image={mainProjectImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {projectImages.map((item, index) => (
              <Img key={index} fluid={item.fluid} alt="" className={styles.image} />
            ))}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>{start}</h4>
          <h4>{days} days</h4>
          <p className={styles.desc}>{description}</p>

          <h2>Tasks</h2>
          <div className={styles.tasks}>
          {tasks.map((item, index) => (
              <Task key={index} id={index+1} info={item.info} />
            ))}
          </div>
          <AniLink fade to="/portfolio" className="button in-primary">
            Back to portfolio
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($projectSlug: String!) {
    project: contentfulTour(slug: { eq: $projectSlug }) {
      name
      country
      days
      start(formatString: "dddd, MMMM Do, YYYY")
      description {
        description
      }
      journey {
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
