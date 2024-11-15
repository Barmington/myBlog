import PostList from '../components/PostList';

export default function Home() {
  const posts = [
    {
      id: 1,
      title: 'First Post',
      comment: 'This is the first post',
      content: 'This is the full content of the first post',
    },
    {
      id: 2,
      title: 'Second Post',
      comment: 'This is the second post',
      content: 'This is the full content of the second post',
    },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <PostList posts={posts} />
    </div>
  );
}
