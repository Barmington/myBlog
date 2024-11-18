import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

db.query(`
     INSERT INTO messages (name, message) VALUES
    ('Owen', 'Wow'),
    ('Tim', 'Woo'),
    ('Homer', 'Doh');
`);
