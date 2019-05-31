const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const  { data } = await graphql(`
    {
      projects: allContentfulTour{
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  /* const  { data } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `) */

    data.projects.edges.forEach(({ node }) => {
      createPage({
        path: `project/${node.slug}`,
        component: path.resolve('./src/templates/project-template.js'),
        context: {
          projectSlug: node.slug,
        }
      })
    })
}