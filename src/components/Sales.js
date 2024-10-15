import React, { useState, useEffect } from 'react';

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

const Sales = ({ setSalesData }) => {
  const [dailyTarget, setDailyTarget] = useState(0);
  const [salesEntries, setSalesEntries] = useState([]);

  // Sync parent state with the local state
  useEffect(() => {
    setSalesData({ dailyTarget, salesEntries });
  }, [dailyTarget, salesEntries, setSalesData]);

  const handleTargetChange = (e) => {
    const target = parseInt(e.target.value) || 0;
    setDailyTarget(target);
  };

  const addSalesEntry = () => {
    const newEntries = [
      ...salesEntries,
      { product: '', packSize: '', quantity: 0, price: 0 },
    ];
    setSalesEntries(newEntries);
  };

  const handleProductChange = (index, product) => {
    const updatedEntries = salesEntries.map((entry, i) =>
      i === index ? { ...entry, product, packSize: '', quantity: 0, price: 0 } : entry
    );
    setSalesEntries(updatedEntries);
  };

  const handlePackSizeChange = (index, packSize) => {
    const updatedEntries = salesEntries.map((entry, i) =>
      i === index ? { ...entry, packSize } : entry
    );
    setSalesEntries(updatedEntries);
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedEntries = salesEntries.map((entry, i) =>
      i === index ? { ...entry, quantity: parseInt(quantity) || 0 } : entry
    );
    setSalesEntries(updatedEntries);
  };

  const handlePriceChange = (index, price) => {
    const updatedEntries = salesEntries.map((entry, i) =>
      i === index ? { ...entry, price: parseFloat(price) || 0 } : entry
    );
    setSalesEntries(updatedEntries);
  };

  const calculateTotalSales = () => {
    return salesEntries.reduce((total, entry) => {
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
        <input
          type="number"
          value={dailyTarget}
          onChange={handleTargetChange}
          placeholder="Enter target"
        />
      </div>
      <h4>Percentage of Target: {percentageOfTarget.toFixed(2)}%</h4>

      <div>
        <h3>Sales per Product per Pack Size</h3>
        {salesEntries.map((entry, index) => (
          <div key={index}>
            <select
              value={entry.product}
              onChange={(e) => handleProductChange(index, e.target.value)}
            >
              <option value="">Select Product</option>
              {Object.keys(categories).flatMap((category) =>
                Object.keys(categories[category]).map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))
              )}
            </select>
            <select
              value={entry.packSize}
              onChange={(e) => handlePackSizeChange(index, e.target.value)}
              disabled={!entry.product}
            >
              <option value="">Select Pack Size</option>
              {entry.product &&
                Object.keys(categories).flatMap((category) =>
                  categories[category][entry.product]?.packSizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
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
