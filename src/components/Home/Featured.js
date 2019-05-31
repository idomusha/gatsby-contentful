import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Project from '../Portfolio/Project'
import Title from '../Common/Title'

import styles from '../Common/list.module.scss'

export default function Featured() {

  const { featuredProjects } = useStaticQuery(graphql`
    {
      featuredProjects: allContentfulTour(filter: {featured: {eq: true}}) {
        totalCount
        edges {
          node {
            contentful_id
            name
            price
            slug
            country
            days
            images {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
    `)
    const projects = featuredProjects.edges;

  return (
    <section className={styles.list}>
      <Title content="featured projects" highlight={['featured']} />
      <div className={styles.center}>
      {projects.map(({ node }) => (
        <Project key={node.contentful_id} project={node} />
      ))}
      </div>
      <AniLink fade to="/portfolio" className="button in-primary">
        All projects
      </AniLink>
    </section>
  )
}
