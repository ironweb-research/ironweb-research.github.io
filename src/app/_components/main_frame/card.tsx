// card.tsx
import React from 'react';

interface CardProps {
  name: string;
  summary: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, summary, description }) => {
  return (
    <div className="feature-cards">
      <h2 className="card-name">{name}</h2>
      <h3 className="card-summary">{summary}</h3>
      <p className="card-description"> {description}</p>
    </div>
  );
};

export default Card;