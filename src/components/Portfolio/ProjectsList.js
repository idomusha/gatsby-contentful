import React, { Component } from 'react'

import Title from '../Common/Title'
import Project from './Project'

import styles from '../Common/list.module.scss'

export default class ProjectsList extends Component {

  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }

  render() {
    return (
      <section className={styles.projects}>
        <Title content="my projects" highlight={['projects']} />
        <div className={styles.center}>
          {this.state.sortedProjects.map(({ node }) => (
            <Project key={node.contentful_id} project={node} />
          ))}
        </div>
      </section>
    )
  }
}
