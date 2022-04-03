import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
  const { tshirt, addToCart } = props;
  //   console.log(tshirt);
  const { name, picture, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={() => addToCart(tshirt)}>Add to Cart</button>
    </div>
  );
};

export default TShirt;
