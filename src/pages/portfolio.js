import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Hero from '../components/Common/Hero';
import Projects from '../components/Portfolio/Projects'

export default class portfolio extends Component {
  render() {
    return (
      <Layout>
        <Hero
          page={this.props.pathname}
          image={this.props.data.portfolioBackgroundImage.childImageSharp.fluid}
        />
        <Projects />
      </Layout>
    );
  }
}

export const query = graphql`
  {
    portfolioBackgroundImage: file(relativePath: { eq: "default.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
