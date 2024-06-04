// ToolCard.js
import React from 'react';
import styled from 'styled-components';

const ToolCard = ({ tool }) => {
  return (
    <Card>
      <Image src={tool.img} alt={tool.name} />
      <Name>{tool.name}</Name>
    </Card>
  );
};

export default ToolCard;

const Card = styled.div`
  background: #000;
  border-radius: 5px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
`;
