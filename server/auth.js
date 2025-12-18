const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');

const router = express.Router();
const SECRET_KEY = 'supersecretkey_change_this_later'; // In prod use .env

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
        `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
        [name, email, hashedPassword],
        function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ message: 'User already exists' });
                }
                return res.status(500).json({ message: 'Database error' });
            }
            res.status(201).json({ message: 'User created successfully', userId: this.lastID });
        }
    );
});

// Login
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password required' });
    }

    db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, SECRET_KEY, { expiresIn: '1h' });

        res.json({
            message: 'Login successful',
            token,
            user: { id: user.id, name: user.name, email: user.email }
        });
    });
});

module.exports = router;
