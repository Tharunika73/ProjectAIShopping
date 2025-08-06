// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Category from './Category';
import ProductSection from './ProductSection';
import ContactFooter from './ContactFooter';
import AuthForm from './AuthForm';

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
      </Routes>
    </Router>
  );
};

export default App;
