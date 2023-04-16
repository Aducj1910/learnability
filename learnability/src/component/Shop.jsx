import React from 'react';
import anon from "../imgs/Anon.png";
import img0 from '../imgs/0.png';
import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import img4 from '../imgs/4.png';
import img5 from '../imgs/5.png';
import img6 from "../imgs/6.png";

function Shop() {
  const products = [
    { id: 1, name: 'Product 1', price: 9.99, image: 'https://github.com/matthewyangcs/munch-buddies/blob/main/assets/1/DEER.png?raw=true' },
    { id: 2, name: 'Product 2', price: 19.99, image: 'https://github.com/matthewyangcs/munch-buddies/blob/main/assets/1/PANDA.png?raw=true' },
    { id: 3, name: 'Product 3', price: 29.99, image: 'https://github.com/matthewyangcs/munch-buddies/blob/main/assets/1/RACCOON.png?raw=true' },
    { id: 4, name: 'Product 4', price: 39.99, image: 'https://github.com/matthewyangcs/munch-buddies/blob/main/assets/1/SKUNK.png?raw=true' },
	{id: 5, name: 'Product 5', price: 49.99, image: 'https://github.com/matthewyangcs/munch-buddies/blob/main/assets/1/TIGER.png?raw=true'}
  ];



  const productStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    margin: '10px',
    width: '250px'
  };

  const imageStyle = {
    marginBottom: '10px'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h1>Shop</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={productStyle}>
            <img style={imageStyle} src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
