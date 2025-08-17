
import React from 'react';

const ProductCard = ({ image, name, price, description }) => {
  const handleBuyNow = () => {
    console.log(`Product Purchased: ${name}`);
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p style={styles.price}>${price}</p>
      <p>{description}</p>
      <button onClick={handleBuyNow} style={styles.button}>Buy Now</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    margin: '10px',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
  },
  button: {
    padding: '8px 12px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductCard;
