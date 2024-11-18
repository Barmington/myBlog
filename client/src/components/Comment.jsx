import PostAPI from '../components/PostAPI';
import { useState } from 'react';

export default function Button() {
  const [comment, setComment] = useState([]);
  function handleComments() {
    setComment(<PostAPI />);
  }
  return (
    <div>
      <button onClick={handleComments}>Add comment</button>
    </div>
  );
}
