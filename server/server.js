import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get('/', (request, response) => {
  response.json('I am the root endpoint');
});
app.get('/posts', async function (request, response) {
  const result = await db.query(`
          
   SELECT
    posts.id,
    users.name,
    posts.title,
    posts.content
  FROM posts
  JOIN users ON posts.user_id = users.id;
  `);
  const posts = result.rows;

  response.json(posts);
});

app.listen(8080, () => console.log('I am running on Port 8080'));
