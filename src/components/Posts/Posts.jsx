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
    return <div>NO POSTS</div>;
  }

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div>
          <h3 className='title'>{`${id} - ${title}`}</h3>
          <div className='body'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
