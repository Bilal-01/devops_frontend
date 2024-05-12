import React, { useState, useEffect } from 'react';

function Count({ onUpdate, vegetables, fruits }) {
  // State for fruit count
  const [fruitCount, setFruitCount] = useState(0);

  // State for vegetable count
  const [vegetableCount, setVegetableCount] = useState(0);

  // Function to handle incrementing fruit count
  const incrementFruitCount = () => {
    setFruitCount(prevCount => prevCount + 1);
    onUpdate(vegetableCount, fruitCount + 1);
  };

  // Function to handle decrementing fruit count
  const decrementFruitCount = () => {
    if (fruitCount > 0) {
      setFruitCount(prevCount => prevCount - 1);
      onUpdate(vegetableCount, fruitCount - 1);
    }
  };

  // Function to handle incrementing vegetable count
  const incrementVegetableCount = () => {
    setVegetableCount(prevCount => prevCount + 1);
    onUpdate(vegetableCount + 1, fruitCount);
  };

  // Function to handle decrementing vegetable count
  const decrementVegetableCount = () => {
    if (vegetableCount > 0) {
      setVegetableCount(prevCount => prevCount - 1);
      onUpdate(vegetableCount - 1, fruitCount);
    }
  };

  useEffect(() => {
    setFruitCount(fruits);
  },[fruits]);
  useEffect(() => {
    setVegetableCount(vegetables)
  },[vegetables])

  return (
    <div>
      <div>
        <h2>Fruit Count: {fruitCount}</h2>
        <button onClick={incrementFruitCount}>Increment Fruit</button>
        <button onClick={decrementFruitCount}>Decrement Fruit</button>
      </div>
      <div>
        <h2>Vegetable Count: {vegetableCount}</h2>
        <button onClick={incrementVegetableCount}>Increment Vegetable</button>
        <button onClick={decrementVegetableCount}>Decrement Vegetable</button>
      </div>
    </div>
  );
}

export default Count;
