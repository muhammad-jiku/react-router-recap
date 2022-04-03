import React from 'react';
import './Cart.css';

const Cart = (props) => {
  // console.log(props);
  const { cart, removeFromCart } = props;

  let command;
  if (cart.length === 0) {
    command = <p>Please add some items to the cart</p>;
  } else if (cart.length === 1) {
    command = <p>Please add more items to the cart</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item to the cart</small>
      </p>
    );
  }

  return (
    <div>
      <h5>Items added to the cart: {cart.length}</h5>
      {command}
      {cart.map((tS) => (
        <p key={tS?._id}>
          {tS?.name}
          <button onClick={() => removeFromCart(tS)}>Delete</button>
        </p>
      ))}
      {cart.length === 4 ? (
        <p>You can't add more</p>
      ) : (
        <p>Add till four items</p>
      )}
      {(cart.length === 0 && cart.length === 5) || <p>Hey stop adding more</p>}
      {cart.length === 3 && <p>Warning for not adding more</p>}
    </div>
  );
};

export default Cart;
