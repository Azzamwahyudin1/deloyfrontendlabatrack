import { useState } from "react";
import "./LoginPage.css";
import laba from "../../assets/logo-labatrack.png";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Mencoba Login dengan:", { email, password });
    };

    const onClick = () => {
        navigate("/");
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Segera Masuk!</h2>
                <img
                    src={laba}
                    alt="Logo LabaTrack"
                    className="logo-labatrack2 "
                    onClick={() => navigate("/")}
                />
                {/* Form Login */}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Masukan email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-input"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Masukan password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input password-input"
                            required
                        />
                    </div>

                    <div className="forgot-password-container">
                        {/* Navigasi untuk lupa password */}
                        <a href="/forgot-password" className="forgot-password-link">
                            Lupa password?
                        </a>
                    </div>

                    <button type="submit" className="btn-login">
                        Masuk
                    </button>
                </form>

                <div className="register-container">
                    <p className="register-text">
                        Belum punya akun?{" "}
                        <a href="/register" className="register-link">
                            Daftar
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;