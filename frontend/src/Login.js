// components/Login.js
import React, { useState } from 'react';
import api from './api'; // Adjust the path to your api configuration

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/user/login', { email, password });
            console.log('User logged in:', res.data);
            setMessage('Login successful!');
        } catch (error) {
            setMessage('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
