import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice.jsx";
import Navbar from "./Navbar.jsx";

const productsByCategory = [
    {
        category: "Low Light",
        items: [
            { id: "LL1", name: "Snake Plant", price: 199, thumbnail: "https://picsum.photos/seed/ll1/120" },
            { id: "LL2", name: "ZZ Plant", price: 249, thumbnail: "https://picsum.photos/seed/ll2/120" },
            { id: "LL3", name: "Pothos", price: 149, thumbnail: "https://picsum.photos/seed/ll3/120" },
            { id: "LL4", name: "Peace Lily", price: 229, thumbnail: "https://picsum.photos/seed/ll4/120" },
            { id: "LL5", name: "Philodendron", price: 189, thumbnail: "https://picsum.photos/seed/ll5/120" },
            { id: "LL6", name: "Chinese Evergreen", price: 219, thumbnail: "https://picsum.photos/seed/ll6/120" },
        ],
    },
    {
        category: "Air Purifying",
        items: [
            { id: "AP1", name: "Areca Palm", price: 299, thumbnail: "https://picsum.photos/seed/ap1/120" },
            { id: "AP2", name: "Rubber Plant", price: 279, thumbnail: "https://picsum.photos/seed/ap2/120" },
            { id: "AP3", name: "Aloe Vera", price: 129, thumbnail: "https://picsum.photos/seed/ap3/120" },
            { id: "AP4", name: "Spider Plant", price: 139, thumbnail: "https://picsum.photos/seed/ap4/120" },
            { id: "AP5", name: "Boston Fern", price: 259, thumbnail: "https://picsum.photos/seed/ap5/120" },
            { id: "AP6", name: "Bamboo Palm", price: 319, thumbnail: "https://picsum.photos/seed/ap6/120" },
        ],
    },
    {
        category: "Pet Friendly",
        items: [
            { id: "PF1", name: "Calathea", price: 269, thumbnail: "https://picsum.photos/seed/pf1/120" },
            { id: "PF2", name: "Parlor Palm", price: 289, thumbnail: "https://picsum.photos/seed/pf2/120" },
            { id: "PF3", name: "Bromeliad", price: 239, thumbnail: "https://picsum.photos/seed/pf3/120" },
            { id: "PF4", name: "Prayer Plant", price: 209, thumbnail: "https://picsum.photos/seed/pf4/120" },
            { id: "PF5", name: "Peperomia", price: 159, thumbnail: "https://picsum.photos/seed/pf5/120" },
            { id: "PF6", name: "Polka Dot Plant", price: 119, thumbnail: "https://picsum.photos/seed/pf6/120" },
        ],
    },
];

export default function ProductList() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const isInCart = (id) => cartItems.some((x) => x.id === id);

    return (
        <div>
            <Navbar />
            <div style={{ maxWidth: 1100, margin: "24px auto", padding: "0 16px" }}>
                <h2>Plants</h2>
                {productsByCategory.map((cat) => (
                    <section key={cat.category} style={{ marginTop: 22 }}>
                        <h3>{cat.category}</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
                            {cat.items.map((p) => (
                                <div key={p.id} style={{ border: "1px solid #e6e6e6", borderRadius: 12, padding: 12 }}>
                                    <img src={p.thumbnail} alt={p.name} width="120" height="120" style={{ borderRadius: 10 }} />
                                    <h4 style={{ margin: "10px 0 6px" }}>{p.name}</h4>
                                    <p style={{ margin: 0 }}>₹{p.price}</p>
                                    <button
                                        style={{ marginTop: 10 }}
                                        disabled={isInCart(p.id)}
                                        onClick={() => dispatch(addToCart(p))}
                                    >
                                        {isInCart(p.id) ? "Added" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
