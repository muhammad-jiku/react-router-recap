import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTshirts from '../hooks/useTshirts/useTshirts';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
  const [tshirts, setTshirts] = useTshirts();
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // let newCart = [];
    const existsCart = cart.find((tshirt) => tshirt?._id === item?._id);
    if (!existsCart) {
      const newCart = [...cart, item];
      setCart(newCart);
    } else {
      alert('Item already added');
    }
  };

  const removeFromCart = (item) => {
    const restCart = cart.filter((i) => i?._id !== item?._id);
    setCart(restCart);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tshirts?.map((tshirt) => (
          <TShirt key={tshirt?._id} tshirt={tshirt} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
};

export default Home;
