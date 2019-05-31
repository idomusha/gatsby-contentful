import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ image, className, page, children }) => (
  <BackgroundImage Tag="header" className={className} fluid={image} page={page}>
    {children}
  </BackgroundImage>
)

export default styled(Hero)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ page }) =>
    page === '/'
      ? 'calc(100vh - var(--height-header))'
      : '50vh'};
  background: ${({ page }) =>
    page === '/'
      ? 'linear-gradient(#3fd0d4b3, rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important; /* fix gradient */
`;
