import React from 'react'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink/'

import { FaMap } from 'react-icons/fa'
import styles from './project.module.scss'

export default function project({ project }) {

  const { name, price, country, days, slug, images } = project
  let projectImage = images[0].fluid

  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        <Image fluid={projectImage} alt="" />
        <AniLink fade to={`project/${slug}`} className={styles.link}>Details</AniLink>
      </div>
      <footer className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
          </div>
        </div>
      </footer>
    </article>
  )
}
