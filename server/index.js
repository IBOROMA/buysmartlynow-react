const express = require('express');
const cors = require('cors');
const db = require('./db');
const authRoutes = require('./auth');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('BuySmartlyNow API is running.');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // Initialize DB tables
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            role TEXT DEFAULT 'user'
        )`, (err) => {
            if (err) {
                console.error("Error creating tables:", err.message);
            } else {
                console.log("Database initialized.");
                // Seed Default User
                const seedUser = require('./seed');
                seedUser();
            }
        });
    });
});
