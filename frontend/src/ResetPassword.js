// components/ResetPassword.js
import React, { useState } from 'react';
import api from './api'; // Adjust the path to your api configuration

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/user/reset-password', { email });
            setMessage('Reset password link sent to your email!');
        } catch (error) {
            setMessage('Error sending reset link. Please try again.');
        }
    };

    return (
        <div className="reset-password">
            <h2>Reset Password</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Send Reset Link</button>
            </form>
        </div>
    );
}

export default ResetPassword;
