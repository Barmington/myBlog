import React, { useState } from 'react';

export default function PostAPI() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });
  const [data, setData] = useState([]);

  // Handle input change
  const handleInputChange = event => {
    const key = event.target.name;
    const value = event.target.value;
    const newForm = { ...form, [key]: value };
    setForm(newForm);
  };

  // Handle form submit
  const handleSubmit = async event => {
    event.preventDefault();

    setData(newForm);
    // console.log(data);

    try {
      const response = await fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log('Response:', jsonResponse);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        name="title"
        placeholder="title"
        onChange={handleInputChange}
        value={form.title}
      />

      <label>Content</label>
      <textarea
        name="content"
        placeholder="Write a post"
        onChange={handleInputChange}
        value={form.content}
      >
        Content
      </textarea>

      <button>Add post</button>
    </form>
  );
}
