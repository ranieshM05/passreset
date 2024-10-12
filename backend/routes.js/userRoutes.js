// userRoutes.js
const express = require('express');
const { registerUser, loginUser, resetPassword, sendResetPasswordEmail } = require('../controllers/userControllers');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/reset-password', sendResetPasswordEmail);
router.post('/reset/:token', resetPassword);

module.exports = router;
