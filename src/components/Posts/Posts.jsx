import { useEffect, useState } from 'react';
import './Posts.scss';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  if (posts.length === 0) {
    return (
      <div className='container-loader'>
        <div className='loader'></div>
      </div>
    );
  }

  return (
    <div>
      {posts.map(({ userId, title, body }) => (
        <div className='container-post'>
          <div className='title'>{`User ${userId}: ${title}`}</div>
          <div className='body'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
