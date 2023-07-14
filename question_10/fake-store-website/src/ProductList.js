import React, { useState, useEffect } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleBuyNow = (product) => {
    // Handle the "Buy Now" button click for the specific product
    console.log(`Buy Now: ${product.title}`);
  };

  const handleAddToCart = (product) => {
    // Handle the "Add to Cart" button click for the specific product
    console.log(`Add to Cart: ${product.title}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <div className="buttons">
              <button onClick={() => handleBuyNow(product)}>Buy Now</button>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;