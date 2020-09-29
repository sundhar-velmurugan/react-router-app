import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetails() {
  useEffect(() => {
    fetchItem();
  });

  const { id } = useParams();
  const [itemName, setItemName] = useState('');
  const [itemUrl, setItemUrl] = useState('');

  const fetchItem = async () => {
    const response = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`);
    const data = await response.json();

    setItemName(data.data.item.name);
    setItemUrl(data.data.item.images.icon);
  };

  return (
    <div>
      <h2>{itemName}</h2>
      <img src={itemUrl} alt={itemName} />
    </div>
  );
}

export default ItemDetails;
