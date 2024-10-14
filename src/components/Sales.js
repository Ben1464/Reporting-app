import React, { useState } from 'react';

const categories = {
  Insecticides: {
    Growprid: { unit: 'gms', packSizes: [5, 10, 25, 50, 100, '1kg'] },
    Timecarb: { unit: 'mls', packSizes: [25, 50, 100, 250, '1ltr'] },
    Spirometer: { unit: 'mls', packSizes: [50, 100, 250, '1ltr'] },
    Emagurd: { unit: 'mls', packSizes: [25, 50, 100, 250, '1ltr'] },
  },
  Fungicides: {
    Pyraccop: { unit: 'mls', packSizes: [50, 100, 250, '1ltr'] },
    Azokon: { unit: 'mls', packSizes: [50, 100, 250, '1ltr'] },
    Manlaxy: { unit: 'gms', packSizes: [50, 100, 250, 500, '1kg'] },
  },
  Nutrition: {
    Okinawo: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
    Seagold: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
    Zincbomate: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
    Calcibora: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
    Boroking: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
    Growspeed_macro: { unit: 'mls', packSizes: [100, 250, 500, '1ltr'] },
  },
  Adjuvant: {
    Polysil: { unit: 'mls', packSizes: [25, 50, 100, 250, '1ltr'] },
  },
  Herbicides: {
    MIne_posat: { unit: 'mls', packSizes: [500, '1ltr'] },
    Bentagrow: { unit: 'mls', packSizes: [500, '1ltr'] },
  },
};

const Sales = () => {
  const [dailyTarget, setDailyTarget] = useState(0);
  const [salesEntries, setSalesEntries] = useState([]);

  const handleTargetChange = (e) => setDailyTarget(e.target.value);

  const addSalesEntry = () => {
    setSalesEntries([...salesEntries, { product: '', packSize: '', quantity: 0, price: 0 }]);
  };

  const handleProductChange = (index, product) => {
    const updatedEntries = [...salesEntries];
    updatedEntries[index].product = product;
    updatedEntries[index].packSize = '';
    updatedEntries[index].quantity = 0;
    updatedEntries[index].price = 0;
    setSalesEntries(updatedEntries);
  };

  const handlePackSizeChange = (index, packSize) => {
    const updatedEntries = [...salesEntries];
    updatedEntries[index].packSize = packSize;
    setSalesEntries(updatedEntries);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedEntries = [...salesEntries];
    updatedEntries[index].quantity = parseInt(quantity) || 0; // Ensure quantity is a number
    setSalesEntries(updatedEntries);
  };

  const handlePriceChange = (index, price) => {
    const updatedEntries = [...salesEntries];
    updatedEntries[index].price = parseFloat(price) || 0; // Ensure price is a number
    setSalesEntries(updatedEntries);
  };

  const calculateTotalSales = () => {
    return salesEntries.reduce((total, entry) => {
      // Total sales = quantity * price
      return total + (entry.quantity * entry.price) || 0;
    }, 0);
  };

  const totalSales = calculateTotalSales();
  const percentageOfTarget = dailyTarget > 0 ? (totalSales / dailyTarget) * 100 : 0;

  return (
    <div>
      <h2>Sales</h2>
      <div>
        <label>Daily Target: </label>
        <input type="number" value={dailyTarget} onChange={handleTargetChange} />
      </div>
      <h4>Percentage of Target: {percentageOfTarget.toFixed(2)}%</h4>

      <div>
        <h3>Sales per Product per Pack Size</h3>
        {salesEntries.map((entry, index) => (
          <div key={index}>
            <select onChange={(e) => handleProductChange(index, e.target.value)}>
              <option value="">Select Product</option>
              {Object.keys(categories).flatMap((category) =>
                Object.keys(categories[category]).map((product) => (
                  <option key={product} value={product}>{product}</option>
                ))
              )}
            </select>
            <select onChange={(e) => handlePackSizeChange(index, e.target.value)} value={entry.packSize}>
              <option value="">Select Pack Size</option>
              {entry.product && Object.keys(categories).flatMap((category) =>
                categories[category][entry.product]?.packSizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))
              )}
            </select>
            <input
              type="number"
              placeholder="Quantity Sold"
              value={entry.quantity || ''}
              onChange={(e) => handleQuantityChange(index, e.target.value)}
            />
            <input
              type="number"
              placeholder="Price per Pack"
              value={entry.price || ''}
              onChange={(e) => handlePriceChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={addSalesEntry}>Add Another Sale</button>
      </div>

      <h4>Total Sales: {totalSales.toFixed(2)}</h4>
    </div>
  );
};

export default Sales;
