import React, { useState } from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  // State Management (Tetap seperti awal)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Tambahan State untuk Smart Pricing (Backend Requirements)
  const [product, setProduct] = useState({
    name: "",
    category: "",
    base_price: 0,
    sell_price: 0,
    stock: 0,
    description: "",
  });

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const onClickLogout = () => navigate("/");

  // Fungsi hitung laba otomatis
  const estimasiLaba = product.sell_price - product.base_price;

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
          <button className="menu-item active">Product</button>
          <button className="menu-item" onClick={() => navigate("/calculator")}>
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

      {/* 2. MAIN CONTENT */}
      <main className="main-content">
        <header className="top-header">
          <button className="hamburger" onClick={toggleSidebar}>
            ☰
          </button>
          <h2>PRODUCT</h2>
        </header>

        <div className="product-page-container">
          {/* Kotak Abu-abu Besar sesuai Gambar */}
          <div className="product-form-card">
            <div className="form-layout">
              {/* Bagian Input Kiri */}
              <div className="form-left">
                <div className="input-box">
                  <label>Nama produk</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama produk"
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                </div>

                <div className="input-box">
                  <label>Kategori</label>
                  <input
                    type="text"
                    placeholder="Masukkan kategori"
                    onChange={(e) =>
                      setProduct({ ...product, category: e.target.value })
                    }
                  />
                </div>

                <div className="input-row">
                  <div className="input-box">
                    <label>Harga jual</label>
                    <input
                      type="number"
                      placeholder="Masukkan harga jual"
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          sell_price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="input-box">
                    <label>HPP (Harga Modal)</label>
                    <input
                      type="number"
                      placeholder="Masukkan HPP"
                      onChange={(e) =>
                        setProduct({
                          ...product,
                          base_price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>

                <div className="input-box">
                  <label>Stok Awal</label>
                  <input
                    type="number"
                    placeholder="0"
                    onChange={(e) =>
                      setProduct({ ...product, stock: Number(e.target.value) })
                    }
                  />
                </div>

                <div className="input-box">
                  <label>Deskripsi Produk</label>
                  <textarea
                    placeholder="Masukkan Deskripsi"
                    rows="4"
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                  ></textarea>
                </div>

                {/* Smart Pricing Display */}
                <div className="laba-info">
                  Estimasi Laba per Item:{" "}
                  <strong>Rp {estimasiLaba.toLocaleString("id-ID")}</strong>
                </div>

                <div className="action-buttons">
                  <button className="btn-orange1">Simpan</button>
                  <button className="btn-orange2">Batal</button>
                </div>
              </div>

              {/* Bagian Kanan: Upload Image */}
              <div className="form-right">
                <div className="upload-container">
                  <button className="btn-upload-center">Upload Image</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Product;
