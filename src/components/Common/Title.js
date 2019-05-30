import React from 'react'
import styled from 'styled-components'

/* const Title = ({ normal, highlight, className }) => (
  <div className={className}>
    <h3>
      <span>{normal} <span className="highlight">{highlight}</span></span>
    </h3>
  </div>
)


export default styled(Title)`
  text-transform: uppercase;
  font-size: 2rem;
  margin: 2rem 0;

  h3 {
    text-align: center;
  }

  .highlight {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    h3 span {
      display: block;
    }
  }
` */

export default function Title ({ normal, highlight, className }) {
  return (
    <StyledTitle className={className}>
      <h3>
        <span>{normal} <span className="highlight">{highlight}</span></span>
      </h3>
    </StyledTitle>
  )
}

const StyledTitle = styled.div`
  text-transform: uppercase;
  font-size: 2rem;
  margin: 2rem 0;

  h3 {
    text-align: center;
  }

  .highlight {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    h3 span {
      display: block;
    }
  }
`