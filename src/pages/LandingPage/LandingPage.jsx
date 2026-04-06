import { useState } from "react";
import "./LandingPage.css";
import logoLabatrack from "../../assets/logo-labatrack.png";
import manekin from "../../assets/menekin.png";
import iconFinansial from "../../assets/iconfinansial.png";
import kasir from "../../assets/kasir.png";
import menejemenProduct from "../../assets/menejemenproduct.png";
import dbsLogo from "../../assets/dbs-logo.png";
import dicodingLogo from "../../assets/dicoding-logo.png";
import gmailIcon from "../../assets/gmail-icon.png";
import waIcon from "../../assets/whatsapp-icon.png";
import { useNavigate } from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const dataFitur = [
        {
            title: "Financial Recording",
            desc: "Sistem akan mempresentasikan rugi dan laba dari harga yang ditentukan sejak awal",
            img: iconFinansial,
        },
        {
            title: "Manejament Product",
            desc: "Fitur yang dimana akan mempermudah anda dalam mengatur degangan anda dengan menambahkan list jualan product anda",
            img: menejemenProduct,
        },
        {
            title: "Hitungin",
            desc: "fitur untuk mempermudah anda dalam mengkalkulasikan list product anda di dalam web kami",
            img: kasir,
        },
    ];

    const onClick = () => {
        navigate("/register");
    };

    return (
        <div className="backround-color">
            <header>
                <img
                    src={logoLabatrack}
                    alt="Logo LabaTrack"
                    className="logo-labatrack"
                />
                <span className="text-linklabahead">www.labatrack.com</span>
            </header>

            <main className="hero">
                <div className="hero-text">
                    <h2>Kendalikan kondisi</h2>
                    <div className="highlight-box">
                        <h1>Labapenjualanmu</h1>
                    </div>
                    <p>Tujuanmu meraih keuntungan berdagang, dimulai dari sini!!!</p>

                    <button
                        className="button-login"
                        onClick={() => navigate("/register")}
                    >
                        {isLoading ? "Loading..." : "Daftar Gratis"} <span> → </span>
                    </button>
                </div>
                <div className="hero-img">
                    <img src={manekin} alt="manekinorang" className="manekin" />
                </div>
            </main>

            <main className="backround-color2">
                <div className="fitur">
                    <h1 className="h1-fitur">Fitur Kami</h1>
                    <p className="p-fitur">Tujuan Meraih Keuntungan Berdagang</p>
                </div>

                <section className="container-fitur">
                    <div className="wrapper-card">
                        {dataFitur.map((item, index) => (
                            <div className="card-item" key={index}>
                                <div className="icon-box">
                                    <img src={item.img} alt={item.title} className="icon-img" />
                                </div>
                                <h2 className="title-card">{item.title}</h2>
                                <p className="desc-card">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer-main">
                <div className="footer-container">
                    <div className="footer-col">
                        <img
                            src={logoLabatrack}
                            alt="LabaTrack Logo"
                            className="footer-logo-main"
                        />
                        <div className="support-section">
                            <p>Support by:</p>
                            <div className="support-box">
                                <img src={dbsLogo} alt="DBS" className="support-img" />
                                <div className="footer-divider"></div>
                                <img
                                    src={dicodingLogo}
                                    alt="Dicoding"
                                    className="support-img"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="footer-col nav-col">
                        <ul className="footer-links">
                            <li>Tentang Kami</li>
                            <li>Komunitas</li>
                            <li>Fitur Kami</li>
                            <li>Tim Developer</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3 className="footer-heading">KONTAK KAMI : </h3>
                        <div className="contact-info">
                            <div className="contact-item">
                                <img src={gmailIcon} alt="Gmail" className="contact-icon" />
                                <span>Labatrack@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <img src={waIcon} alt="WA" className="contact-icon" />
                                <span>+62 878-2690-8794</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright 2026 – 2030 Labatrack.com</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;