// src/components/CustomerList.js

import React, { useState, useEffect } from 'react';
import { getCustomers } from './Services';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((response) => {
      setCustomers(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Customers List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>{customer.name}, Age: {customer.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
