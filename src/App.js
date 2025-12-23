import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import CartPage from './pages/CartPage';
import { products } from './data/products';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer'; // Import the Footer

function App() {
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <Router>
      {/* The style here uses Flexbox to ensure that the content 
          pushes the footer to the bottom of the screen.
      */}
      <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header cartCount={cart.length} onAddToCart={addToCart} />
        
        {/* The main container grows to fill available space */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route 
              path="/playstation" 
              element={<ProductList title="PlayStation" category="playstation" products={products} addToCart={addToCart} />} 
            />
            <Route 
              path="/xbox" 
              element={<ProductList title="Xbox" category="xbox" products={products} addToCart={addToCart} />} 
            />
            <Route 
              path="/nintendo" 
              element={<ProductList title="Nintendo" category="nintendo" products={products} addToCart={addToCart} />} 
            />
            <Route 
              path="/consoles" 
              element={<ProductList title="Consoles" category="consoles" products={products} addToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={<CartPage cart={cart} removeFromCart={removeFromCart} />} 
            />
            <Route 
              path="/checkout" 
              element={<CheckoutPage cart={cart} />} 
            />
          </Routes>
        </main>

        {/* Footer placed outside Routes so it appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;