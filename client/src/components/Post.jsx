import { useParams } from 'react-router-dom';

export default function Post({ posts }) {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  return post ? (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ) : (
    <p>Post not found</p>
  );
}
