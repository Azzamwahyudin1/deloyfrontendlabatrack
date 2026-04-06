import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    
    const onClickLogout = () => {
        navigate("/");
    };

    return (
        <div className="container">
            {/* 1. SIDEBAR */}
            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <nav className="menu">
                    <button className="menu-item active">Dashboard</button>
                    <button className="menu-item" onClick={() => navigate("/cashier")}>Cashier</button>
                    <button className="menu-item" onClick={() => navigate("/product")}>Product</button>
                    <button className="menu-item" onClick={() => navigate("/calculator")}>Calculator</button>
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

                    {isProfileOpen && (
                        <div className="profile-options">
                            <button className="profile-opt-btn">📝 Edit Profile</button>
                            <button className="profile-opt-btn logout" onClick={onClickLogout}>⏻ Log out</button>
                        </div>
                    )}
                </div>
            </aside>

            {/* 2. MAIN CONTENT */}
            <div className="main">
                <header className="top-header">
                    <button className="hamburger" onClick={toggleSidebar}>☰</button>
                </header>

                <div className="topbar">
                    <button onClick={onClickLogout} className="logout-item">⏻ Log out</button>
                </div>

                <div className="content">
                    <div className="header-title">
                        <h1>Dashboard 🔥</h1>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>Laba Hari ini</h3>
                            <div className="stat-content">
                                <div className="icon-box">💰</div>
                                <span className="stat-value">Rp +100.000</span>
                            </div>
                            <p className="stat-footer">1 transaksi</p>
                        </div>

                        <div className="stat-card">
                            <h3>Dagangan terjual</h3>
                            <div className="stat-content">
                                <div className="icon-box">💰</div>
                                <span className="stat-value">1</span>
                            </div>
                            <p className="stat-footer">3 dagangan tersisa</p>
                        </div>

                        <div className="stat-card">
                            <h3>Total produk</h3>
                            <div className="stat-content">
                                <div className="icon-box">💰</div>
                                <span className="stat-value">3</span>
                            </div>
                            <p className="stat-footer">Produk tersedia</p>
                        </div>
                    </div>

                    {/* Transaction Table Section */}
                    <div className="transaction-section">
                        <div className="section-title">
                            <span className="icon-history">⏳</span>
                            <h2>Transaksi Terakhir</h2> 
                        </div>
                        <div className="table-container">
                            <table className="transaction-table">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Kasir</th>
                                        <th>Total</th>
                                        <th>Waktu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>29377499</td>
                                        <td>Administrator</td>
                                        <td>Rp 100.000</td>
                                        <td>20/03/2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> {/* Penutup content */}
            </div> {/* Penutup main */}
        </div> // Penutup container
    );
}

export default Dashboard;