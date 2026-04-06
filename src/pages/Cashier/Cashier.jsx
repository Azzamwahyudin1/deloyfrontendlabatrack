import React, { useState } from 'react';
import './Cashier.css';
import { useNavigate } from "react-router-dom";

function Cashier() {
    const navigate = useNavigate();

    const onClickDashboard = () => {
        navigate("/dashboard");
    };
    const onClickProduct = () => {
        navigate("/product");
    };
    const onClickLogout = () => {
        navigate("/");
    };

    const onClickCalculator = () => {
        navigate("/calculator");
    };

    // State Management
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [cart, setCart] = useState([
        { id: 1, name: 'Es Teh', code: 'MNM001', price: 3000, qty: 1 },
        { id: 2, name: 'Roti', code: 'SCK001', price: 5000, qty: 2 },
    ]);

    // Functions
    const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="container">
            {/* 1. SIDEBAR */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <nav className="menu">
                    <button
                        className="menu-item"
                        onClick={() => navigate("/dashboard")}
                    >Dashboard</button>
                    <button className="menu-item active">Cashier</button>
                    <button
                        className="menu-item"
                        onClick={() => navigate("/product")}
                    >Product</button>
                    <button className="menu-item"
                        onClick={onClickCalculator}
                    >Calculator</button>
                </nav>

                <div className="profile-card">
                    <div
                        className="profile-main"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="profile-info-wrapper">
                            <span className="avatar">P</span>
                            <span>Profile</span>
                        </div>
                        <span className={`arrow ${isProfileOpen ? 'rotate' : ''}`}>▼</span>
                    </div>

                    {/* Menu Dropdown Profil */}
                    {isProfileOpen && (
                        <div className="profile-options">
                            <button className="profile-opt-btn">📝 Edit Profile</button>
                            <button
                                className="profile-opt-btn logout"
                                onClick={onClickLogout}
                            >⏻ Log out</button>
                        </div>
                    )}
                </div>
            </aside>
            {/* tutup sidebar */}

            {/* 2. OVERLAY (Hanya muncul di mobile saat sidebar buka) */}
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

            {/* 3. MAIN CONTENT */}
            <main className="main-content">
                <header className="top-header">
                    <button className="hamburger" onClick={toggleSidebar}>☰</button>
                    <h2>CASHIER</h2>
                </header>

                <div className="product-grid">
                    {Array(3).fill(0).map((_, i) => (
                        <div
                            key={i}
                            className="product-placeholder"
                            onClick={() => alert('Produk dipilih!')}
                        >
                            {/* Tempat gambar produk nanti */}
                        </div>
                    ))}
                </div>
            </main>

            {/* 4. CART PANEL (SISI KANAN) */}
            <section className="cart-section">
                <div className="cart-header">
                    <span>🛒</span>
                    <h2>Cart</h2>
                </div>

                <div className="cart-list">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-card">
                            <div className="item-detail">
                                <span className="name">{item.name}</span>
                                <span className="code">{item.code}</span>
                            </div>
                            <div className="qty-control">
                                <button className="qty-btn">+</button>
                                <span>{item.qty}</span>
                                <button className="qty-btn">-</button>
                            </div>
                            <div className="price-tag">
                                Rp.{(item.price * item.qty).toLocaleString('id-ID')}
                                <button className="btn-remove">X</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-footer">
                    <div className="summary">
                        <span>Total</span>
                        <span>Rp.{total.toLocaleString('id-ID')}</span>
                    </div>
                    <button className="btn-payment">💳 Payment Method</button>
                    <div className="btn-group">
                        <button className="btn-check">Checkout</button>
                        <button className="btn-clear" onClick={() => setCart([])}>Clear</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Cashier;