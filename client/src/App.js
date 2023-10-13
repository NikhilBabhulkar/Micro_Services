import React from 'react'
import {Routes,Route} from "react-router-dom"
import BookList from './Componants/BookList'
import OrderList from './Componants/OrderList'
import CustomerList from './Componants/CustomerList'


function App() {
  return (
    <Routes>
        <Route path="/" element={<BookList/>} /> 
        <Route path="/customer" element={<OrderList/>} /> 
        <Route path="/order" element={<CustomerList/>} /> 
      </Routes>
  )
}

export default App