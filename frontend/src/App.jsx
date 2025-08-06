// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import AuthForm from './AuthForm';
import Category from './Category';
import ProductSection from './ProductSection';
import ContactFooter from './ContactFooter';
// import ProductDetail from './ProductDetail'; // You can add this later if needed

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <ProductSection />
               <ContactFooter />
            </>
          }
        />
        <Route path="/login" element={<AuthForm />} />
        {/* Add other routes here if needed */}
      </Routes>
    </Router>
  );
};

export default App;
