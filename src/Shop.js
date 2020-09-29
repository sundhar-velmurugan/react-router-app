import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  useEffect(() => {
    getItems();
  }, []);

  const [items, setItems] = useState([]);

  const getItems = async () => {
    const response = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const data = await response.json();
    console.log(data.data);
    setItems(data.data.slice(0, 15));
  };

  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => (
        <h2 key={item.itemId}>
          <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;
