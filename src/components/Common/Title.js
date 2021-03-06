import React from 'react';
import styled from 'styled-components';
import Highlighter from 'react-highlight-words';

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

export default function Title({ content, highlight, className }) {
  return (
    <StyledTitle className={className}>
      <h3>
        <Highlighter
          highlightClassName="highlight"
          searchWords={ highlight }
          autoEscape={true}
          textToHighlight={ content }
        />
      </h3>
    </StyledTitle>
  );
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
    background-color: transparent;
  }

  @media (max-width: 768px) {
    h3 span {
      display: block;
    }
  }
`;
