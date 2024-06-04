// ToolsGrid.js
import React from 'react';
import styled from 'styled-components';
import ToolCard from './ToolCard';

const ToolsGrid = ({ tools }) => {
  return (
    <Container>
      <Title>Tools & Frameworks</Title>
      <Grid>
        {tools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsGrid;

const Container = styled.div`
  padding: 4rem 0;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #01be96;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  padding: 0 1rem;
`;
