import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'

import { FaMap } from 'react-icons/fa'
import styles from './project.module.scss'
import Projects from './Projects';

export default function Project({ project }) {

  // simulate null data for the third item
  if (project.contentful_id === '52uhi0XwYz7mhq3kPPpVHG') {
    project.images = null
    project.slug = null
    project.days = null
  }

  const { name, price, country, days, slug, images } = project
  const { file: { childImageSharp: { fluid: fallbackImage }} } = useStaticQuery(graphql`
  {
    file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  const projectImage = images ? images[0].fluid : fallbackImage

  const inner = (
    <>
      <div className={styles.imgContainer}>
        <Image fluid={projectImage} alt="" />
        {slug !== null && <span type="button" to={`project/${slug}`} className={styles.button}>Details</span>}
      </div>
      <footer className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            {days !== null && <h6>{days} days</h6>}
          </div>
        </div>
      </footer>
    </>
  )

  return (
    <article className={styles.project}>
      {slug !== null
        ? <Link to={`project/${slug}`} className={styles.link}>{inner}</Link>
        : <>{inner}</>
      }
    </article>
  )
}

Project.propTypes = {
  project:PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  })
}