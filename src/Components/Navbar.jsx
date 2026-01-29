import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

export default function Navbar() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalQty = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    return (
        <header className="navbar">
            <strong>Paradise Nursery</strong>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/plants">Plants</Link>
                <Link to="/cart">
                    Cart <span className="cart-badge">{totalQty}</span>
                </Link>
            </nav>
        </header>
    );
}
