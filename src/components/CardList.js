import React from 'react';
import Card from './Card';

const CardList = ({ person }) => {
  return (
    <div>
      {
        person.map((persons, i) => {
          return (
            <Card
              key={i}
              name={persons.name}
              age={persons.age}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;