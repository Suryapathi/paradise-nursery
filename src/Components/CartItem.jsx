import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "./CartSlice.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function CartItem() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: 1000, margin: "24px auto", padding: "0 16px" }}>
                <h2>Your Cart</h2>

                {cartItems.length === 0 ? (
                    <p>
                        Your cart is empty. <Link to="/plants">Go to Plants</Link>
                    </p>
                ) : (
                    <>
                        <div style={{ display: "grid", gap: 12 }}>
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        display: "flex",
                                        gap: 14,
                                        alignItems: "center",
                                        border: "1px solid #e6e6e6",
                                        borderRadius: 12,
                                        padding: 12,
                                    }}
                                >
                                    <img src={item.thumbnail} alt={item.name} width="90" height="90" style={{ borderRadius: 10 }} />

                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: 0 }}>{item.name}</h4>
                                        <p style={{ margin: "6px 0" }}>Unit Price: ₹{item.price}</p>
                                        <p style={{ margin: 0 }}>Item Total: ₹{item.price * item.quantity}</p>
                                    </div>

                                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                                        <strong>{item.quantity}</strong>
                                        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                                    </div>

                                    <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
                                </div>
                            ))}
                        </div>

                        <h3 style={{ marginTop: 18 }}>Total Cart Amount: ₹{totalAmount}</h3>

                        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                            <button onClick={() => alert("Coming Soon")}>Checkout</button>
                            <Link to="/plants">
                                <button>Continue Shopping</button>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
