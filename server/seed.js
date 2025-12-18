const db = require('./db');
const bcrypt = require('bcryptjs');

const seedUser = async () => {
    const username = 'badinfluence'; // Using as email/identifier
    const password = '12345';

    // Check if user exists
    db.get(`SELECT * FROM users WHERE email = ?`, [username], async (err, row) => {
        if (err) {
            console.error(err.message);
            return;
        }
        if (!row) {
            // Create User
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            db.run(`INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`,
                ['Bad Influence', username, hashedPassword, 'admin'],
                (err) => {
                    if (err) console.error(err.message);
                    else console.log(`Seeded user: ${username}`);
                }
            );
        } else {
            console.log("Default user already exists.");
        }
    });
};

module.exports = seedUser;
