import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import "./App.css"
import Register from './pages/Register';
import Login from './pages/Login';
import UserList from './pages/UserList';
import Shop from "./pages/Shop";


function App() {
    const [token, setToken] = useState('');

    return (
        <div>
            <BrowserRouter>
                <div>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/shop">Gori Mot</Link>
                    <Routes>
                        <Route path="/register" element={<Register setToken={setToken} />} />
                        <Route path="/login" element={<Login setToken={setToken} />} />
                        <Route path="/users" element={<UserList token={token} />} />
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}
export default App;