import { useState, useEffect } from 'react';

export default function UserInput() {
  const [form, setForm] = useState({
    title: '',
    content: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();
    setForm({ title: '', blog: '' });
  }

  async function handleChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    const newForm = { ...form, [key]: value };
    setForm(newForm);

    // or
    // setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="blog">
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <input
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={form.title}
        />

        <label>blog</label>
        <textarea
          name="blog"
          placeholder="Write a post"
          onChange={handleChange}
          value={form.blog}
        ></textarea>

        <button>Add post</button>
      </form>
      <p>{form.title}</p>
      <p>{form.blog}</p>
    </div>
  );
}
