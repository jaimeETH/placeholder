import React from 'react';
import ProductCard from './components/ProductCard';

const products = [
  {
    image: 'shoes.avif',
    name: 'Running Shoes',
    price: 59.99,
    description: 'Comfortable running shoes for daily use.',
  },
  {
    image: 'backpack.jpg    ',
    name: 'Travel Backpack',
    price: 39.99,
    description: 'Durable backpack suitable for long trips.',
  },
  {
    image: 'headphones.jfif',
    name: 'Wireless Headphones',
    price: 89.99,
    description: 'Noise-cancelling headphones with Bluetooth support.',
  },
 
];

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center' }}>Product List</h1>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
};

export default App;
