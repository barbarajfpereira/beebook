import { useEffect } from 'react';
import './Posts.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts } from '../../state/postsSlice';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
          dispatch(setPosts(posts));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {posts.map(({ userId, title, body }, index) => (
        <div key={index} className='container-post'>
          <div className='title'>{`User ${userId}: ${title}`}</div>
          <div className='body'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
