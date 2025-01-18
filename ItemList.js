import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get("/items");
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item._id} className="item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
