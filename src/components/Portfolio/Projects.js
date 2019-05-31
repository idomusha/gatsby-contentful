import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectsList from './ProjectsList'

export default function Projects() {

  const { projects } = useStaticQuery(graphql`
  {
    projects: allContentfulTour {
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

  return (
    <div>
      <ProjectsList projects={projects} />
    </div>
  )
}
