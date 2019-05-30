import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import Form from '../components/Contact/Form';

export default function contact({ data, location: { pathname }}) {
  return (
    <Layout>
      <Hero
        page={pathname}
        image={data.contactBackgroundImage.childImageSharp.fluid}
      />
      <Form />
    </Layout>
  );
}

export const query = graphql`
  {
    contactBackgroundImage: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
