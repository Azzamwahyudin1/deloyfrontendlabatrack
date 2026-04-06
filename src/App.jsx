import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import Cashier from './pages/Cashier/Cashier';
import Product from './pages/Product/Product';
import Calculator from './pages/Calculator/Calculator';

function App() {
    return (
        <Router>
            <Routes>
                {/* Halaman Publik */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path='/cashier' element={<Cashier />} />

                {/* Halaman Terproteksi (Dashboard) */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/product" element={<Product />} />
                <Route path="/calculator" element={<Calculator />} />
                {/* Kamu bisa tambah route lain seperti /dashboard/product nantinya */}
            </Routes>
        </Router>
    );
}

export default App;