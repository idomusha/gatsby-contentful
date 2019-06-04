import React from 'react';
import { graphql } from 'gatsby';

import Head from '../components/Common/Head'
import Layout from '../containers/Layout';
import Hero from '../components/Common/Hero';
import Form from '../components/Contact/Form';

export default function contact({ data, location: { pathname }}) {
  return (
    <Layout>
      <Head title="Contact" />
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
