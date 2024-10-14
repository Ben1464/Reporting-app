import React, { useState } from 'react';

const TopSellingProducts = () => {
  const [products, setProducts] = useState([{ competitor: '', product: '', avgPrice: 0, unitsSold: 0, totalValue: 0 }]);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2>Top Selling Products</h2>
      {products.map((product, index) => (
        <div key={index}>
          <label>Competitor: </label>
          <input type="text" value={product.competitor} onChange={(e) => handleProductChange(index, 'competitor', e.target.value)} />
          <label>Product: </label>
          <input type="text" value={product.product} onChange={(e) => handleProductChange(index, 'product', e.target.value)} />
          <label>Average Price: </label>
          <input type="number" value={product.avgPrice} onChange={(e) => handleProductChange(index, 'avgPrice', e.target.value)} />
          <label>Units Sold: </label>
          <input type="number" value={product.unitsSold} onChange={(e) => handleProductChange(index, 'unitsSold', e.target.value)} />
          <label>Total Value: </label>
          <input type="number" value={product.totalValue} onChange={(e) => handleProductChange(index, 'totalValue', e.target.value)} />
        </div>
      ))}
    </div>
  );
};

export default TopSellingProducts;
