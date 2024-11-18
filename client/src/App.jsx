import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  // Fetch posts from backend
  useEffect(() => {
    axios
      .get('http://localhost:8080/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  // Create a new blog post
  const createPost = () => {
    axios
      .post('http://localhost:8080/posts', newPost)
      .then(response => {
        setPosts([...posts, response.data]);
        setNewPost({ title: '', content: '' });
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  };

  return (
    <div className="app">
      <h1>Blog</h1>

      {/* New Post Form */}
      <div>
        <h2>Create a new post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={e => setNewPost({ ...newPost, content: e.target.value })}
        />
        <button onClick={createPost}>Create Post</button>
      </div>

      {/* Posts List */}
      <div className="post">
        <h2>Posts</h2>
        {posts.map(post => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={createPost}>Add comment</button>
          </div>
        ))}
      </div>
    </div>
  );
}
