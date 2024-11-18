import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../components/Comment';

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const data = await response.json();
      setPosts(data);
      console.log(data);
    }

    getPosts();
  }, []);
  return (
    <div className="post">
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.comment}</p>

          <Link to={`/posts/${post.id}`}>Read More</Link>
          <Comment />
        </div>
      ))}
    </div>
  );
}
