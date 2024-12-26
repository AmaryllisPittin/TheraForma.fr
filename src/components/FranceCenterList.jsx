import React from 'react';
import Card from './FranceCenterCard';

const FranceCenterList = ({ data = [] }) => {
  return (
    <div className="cards-container">
      {data.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};


export default FranceCenterList;