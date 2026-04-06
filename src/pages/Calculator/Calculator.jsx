import "./Calculator.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Calculator() {
    const navigate = useNavigate();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // 1. State untuk form (tambah 'metode')
    const [formData, setFormData] = useState({
        namaProduk: "",
        jumlahProduksi: "",
        biayaBahanBaku: "",
        biayaTenagaKerja: "",
        biayaOverhead: "",
        metode: "Markup", // Default metode
        presentase: ""
    });

    // 2. State untuk hasil perhitungan dan loading
    const [hasil, setHasil] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const onClickLogout = () => navigate("/");

    // 3. Fungsi untuk mengirim data ke backend (Express.js)
    const hitungHPP = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg('');
        setHasil(null);

        const payload = {
            namaProduk: formData.namaProduk,
            jumlahProduksi: Number(formData.jumlahProduksi),
            biayaBahanBaku: Number(formData.biayaBahanBaku),
            biayaTenagaKerja: Number(formData.biayaTenagaKerja) || 0,
            biayaOverhead: Number(formData.biayaOverhead) || 0,
            metode: formData.metode.toLowerCase(),
            persentase: Number(formData.presentase)
        };

        try {
            // Pastikan URL ini sesuai dengan port backend Anda
            const response = await fetch('http://localhost:5000/api/hitung-hpp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (!response.ok || !data.success) {
                throw new Error(data.message || 'Terjadi kesalahan saat menghitung.');
            }

            setHasil(data.data); // Simpan hasil dari backend
        } catch (error) {
            setErrorMsg(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const onClickDashboard = () => {
        navigate("/dashboard");
    };

    const onClickCashier = () => {
        navigate("/cashier");
    };

    const onClickProduct = () => {
        navigate("/product");
    };

    return (
        <div className="container">
            {/* 1. SIDEBAR (Tetap sesuai kodingan awal) */}
            <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <nav className="menu">
                    <button className="menu-item" onClick={() => navigate("/dashboard")}>
                        Dashboard
                    </button>

                    <button className="menu-item" onClick={() => navigate("/cashier")}>
                        Cashier
                    </button>

                    <button
                        className="menu-item"
                        onClick={() => navigate("/product")}>
                        Product
                    </button>

                    <button
                        className="menu-item active"
                        onClick={() => navigate("/calculator")}>
                        Calculator
                    </button>
                </nav>

                <div className="profile-card">
                    <div
                        className="profile-main"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="profile-info-wrapper">
                            <span className="avatar">P</span>
                            <span>Profile</span>
                        </div>
                        <span className={`arrow ${isProfileOpen ? "rotate" : ""}`}>▼</span>
                    </div>
                    {isProfileOpen && (
                        <div className="profile-options">
                            <button className="profile-opt-btn">📝 Edit Profile</button>
                            <button
                                className="profile-opt-btn logout"
                                onClick={onClickLogout}
                            >
                                ⏻ Log out
                            </button>
                        </div>
                    )}
                </div>
            </aside>

           {/* MAIN CONTENT */}
            <main className="main-content">
                <header className="top-header" style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                    <button className="hamburger" onClick={toggleSidebar} style={{background: 'none', border: 'none', fontSize: '24px', marginRight: '15px', cursor: 'pointer'}}>
                        ☰
                    </button>
                    <h2>CALCULATOR</h2>
                </header>

                <div className="calculator-card">
                    <h1 style={{textAlign: 'center', marginBottom: '30px', fontSize: '24px' , color: '#f38a2c'}}>Kalkulator HPP</h1>
                    
                    {/* Form membungkus input agar bisa disubmit */}
                    <form onSubmit={hitungHPP}>
                        <div className="form-grid">
                            
                            <div className="form-group">
                                <label>Nama Produk</label>
                                <div className="input-row">
                                    <input type="text" name="namaProduk" value={formData.namaProduk} onChange={handleInputChange} placeholder="Masukkan nama produk" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Jumlah Produksi</label>
                                <div className="input-row">
                                    <input type="number" name="jumlahProduksi" value={formData.jumlahProduksi} onChange={handleInputChange} placeholder="Masukkan jumlah produk" required min="1" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Biaya Bahan Baku</label>
                                <div className="input-row">
                                    <input type="number" name="biayaBahanBaku" value={formData.biayaBahanBaku} onChange={handleInputChange} placeholder="Masukkan biaya bahan baku" required min="1" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Biaya Tenaga Kerja</label>
                                <div className="input-row">
                                    <input type="number" name="biayaTenagaKerja" value={formData.biayaTenagaKerja} onChange={handleInputChange} placeholder="Masukkan biaya tenaga kerja" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Biaya Overhead</label>
                                <span style={{fontSize: '0.85rem', display: 'block', marginBottom: '8px', fontWeight: '300'}}>cth: sewa tempat, listrik,kemasan,dll</span>
                                <div className="input-row">
                                    <input type="number" name="biayaOverhead" value={formData.biayaOverhead} onChange={handleInputChange} placeholder="Masukkan biaya overhead" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Penentuan Harga Jual</label>
                                <div className="input-row dual-input" style={{ alignItems: 'flex-end' }}>
                                    <div style={{ width: '50%' }}>
                                        <span style={{fontSize: '0.85rem', display: 'block', marginBottom: '4px'}}>Metode :</span>
                                        <select name="metode" value={formData.metode} onChange={handleInputChange}>
                                            <option value="Markup">Markup</option>
                                            <option value="Margin">Margin</option>
                                        </select>
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <span style={{fontSize: '0.85rem', display: 'block', marginBottom: '4px'}}>Presentase :</span>
                                        <input type="number" name="presentase" value={formData.presentase} onChange={handleInputChange} placeholder="%" required min="1" style={{textAlign: 'right'}} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Tombol Submit */}
                        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                            <button type="submit" className="btn-submit" disabled={isLoading}>
                                {isLoading ? 'Menghitung...' : 'Hitung HPP'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* AREA TAMPILAN ERROR */}
                {errorMsg && (
                    <div className="result-card error-card">
                        <strong>Error:</strong> {errorMsg}
                    </div>
                )}

                {/* AREA TAMPILAN HASIL */}
                {hasil && (
                    <div className="result-card">
                        <h3 className="result-title">Hasil Perhitungan: {hasil.namaProduk}</h3>
                        <div className="form-grid result-grid">
                            <div>
                                <p>HPP Total: <strong>Rp {hasil.hppTotal.toLocaleString('id-ID')}</strong></p>
                                <p>HPP per Unit: <strong>Rp {hasil.hppPerUnit.toLocaleString('id-ID')}</strong></p>
                            </div>
                            <div>
                                <p>Harga Jual per Unit: <strong className="highlight-text">Rp {hasil.hargaJualPerUnit.toLocaleString('id-ID')}</strong></p>
                                <p>Keuntungan per Unit: <strong>Rp {hasil.keuntunganPerUnit.toLocaleString('id-ID')}</strong></p>
                            </div>
                        </div>
                        <div className="result-total">
                            <p>Estimasi Total Pendapatan: <span className="highlight-text">Rp {hasil.totalPendapatan.toLocaleString('id-ID')}</span></p>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default Calculator;