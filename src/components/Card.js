import React from 'react';

const Card = ({ id,name, age}) => {
  if(age === null)
    age ="unknown";
  return(
    <div className='tc grow bg-washed-red br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}

export default Card;
