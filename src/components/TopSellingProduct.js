import React, { useState } from 'react';

const TopSellingProducts = ({ setTopSellingData }) => {
  const [products, setProducts] = useState([
    { competitor: '', product: '', avgPrice: 0, unitsSold: 0, totalValue: 0 },
  ]);

  // Update both local and parent state
  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);  // Update local state
    setTopSellingData(updatedProducts);  // Update parent state
  };

  // Add a new product entry
  const addProduct = () => {
    const newProducts = [
      ...products,
      { competitor: '', product: '', avgPrice: 0, unitsSold: 0, totalValue: 0 },
    ];
    setProducts(newProducts);
    setTopSellingData(newProducts);  // Also update parent state
  };

  return (
    <div>
      <h2>Top Selling Products</h2>
      <button onClick={addProduct}>Add Product</button>
      {products.map((product, index) => (
        <div key={index}>
          <label>Competitor: </label>
          <input
            type="text"
            value={product.competitor}
            onChange={(e) => handleProductChange(index, 'competitor', e.target.value)}
          />
          <label>Product: </label>
          <input
            type="text"
            value={product.product}
            onChange={(e) => handleProductChange(index, 'product', e.target.value)}
          />
          <label>Average Price: </label>
          <input
            type="number"
            value={product.avgPrice}
            onChange={(e) => handleProductChange(index, 'avgPrice', e.target.value)}
          />
          <label>Units Sold: </label>
          <input
            type="number"
            value={product.unitsSold}
            onChange={(e) => handleProductChange(index, 'unitsSold', e.target.value)}
          />
          <label>Total Value: </label>
          <input
            type="number"
            value={product.totalValue}
            onChange={(e) => handleProductChange(index, 'totalValue', e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default TopSellingProducts;
