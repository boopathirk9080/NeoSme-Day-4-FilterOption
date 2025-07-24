import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router";
import Category from './components/Category'
import NavBar from './components/NavBar'
import ProductDetails from './components/ProductDetails';
import Cart from './components/cart/Cart';
function App() {
  return (
    <div>
      <BrowserRouter>

        <NavBar />
        
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App