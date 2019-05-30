import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Hero from '../components/Hero';

export default function blog({ data, location: { pathname }}) {

  // get data direclty in props (only on project pages)
  console.log(data);

  return (
    <Layout>
      <Hero
        page={pathname}
        image={data.blogBackgroundImage.childImageSharp.fluid}
      />
    </Layout>
  );
}

export const query = graphql`
  {
    blogBackgroundImage: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
