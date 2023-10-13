// src/components/OrderList.js

import React, { useState, useEffect } from 'react';
import { getOrders } from './Services';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Orders List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>Customer: {order.customerID}, Book: {order.bookID}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
