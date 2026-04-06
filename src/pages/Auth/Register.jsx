import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import userIcon from "../../assets/logo2.svg";
import lockIcon from "../../assets/logo3.svg";
import emailIcon from "../../assets/logo1.svg";
import LogoLabatrack from "../../assets/logo-labatrack.png";

function Auth() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const onClick = () => {
      navigate("/");
    };

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <img
            className="logo"
            src={LogoLabatrack}
            alt="Logo Labatrack"
            id="logo"
            onClick={() => navigate("/")}
          />
          <h1>Selamat Datang!</h1>
          <p>Ayo! Mulai Mengelola Keuangan dan Pemasukan Kamu di Labatrack</p>
          <button className="btn-orange" onClick={() => navigate("/login")}>
            Masuk
          </button>
        </div>

        <div className="auth-right">
          <h2>Buat Akun</h2>
          <p>Masuk Menggunakan Info Pribadi Kamu</p>
          <p>Isi Semua Kolom Dibawah Ini!</p>

          <form className="auth-form" onSubmit={handleRegister}>
            <div className="input-group">
              <img src={userIcon} className="input-icon" alt="" />
              <input type="text" placeholder="Nama Toko" required />
            </div>

            <div className="input-group">
              <img src={lockIcon} className="input-icon" alt="" />
              <input type="password" placeholder="Password" required />
            </div>

            <div className="input-group">
              <img src={emailIcon} className="input-icon" alt="" />
              <input type="email" placeholder="Email" required />
            </div>

            <button type="submit" className="btn-green">
              {isLoading ? "Loading..." : "Daftar Gratis"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
