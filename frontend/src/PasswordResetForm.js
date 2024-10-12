// components/PasswordResetForm.js
import React, { useState } from 'react';
import api from './api'; // Adjust the path to your api configuration
import { useParams } from 'react-router-dom';

function PasswordResetForm() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/user/reset/${token}`, { password });
            setMessage('Password has been reset successfully!');
        } catch (error) {
            setMessage('Error resetting password. Please try again.');
        }
    };

    return (
        <div className="password-reset-form">
            <h2>Reset Password</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    placeholder="New Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
}

export default PasswordResetForm;
