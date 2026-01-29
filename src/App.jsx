import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs.jsx";
import ProductList from "./Components/ProductList.jsx";
import CartItem from "./Components/CartItem.jsx";

export default function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="landing">
            <div className="landing-card">
              <h1>Paradise Nursery</h1>
              <p>Beautiful indoor plants for your home.</p>
              <button className="primary-btn" onClick={() => navigate("/plants")}>
                Get Started
              </button>
            </div>
          </div>
        }
      />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
