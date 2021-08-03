import { useEffect } from 'react';
import './Posts.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setError } from '../../state/postsSlice';
import { useHistory } from 'react-router-dom';

const Posts = () => {
  let history = useHistory();

  const posts = useSelector((state) => state.posts.value);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(setLoading(true));

      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) {
            throw Error();
          }
          return response.json();
        })
        .then((posts) => {
          dispatch(setPosts(posts));
        })
        .catch((error) => {
          dispatch(setError(true));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }

    return () => {
      if (error) {
        dispatch(setError(false));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className='posts-loading'>
        <div className='loader'></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='posts-error'>
        Oops. Something went wrong.
        <button
          className='redirect'
          onClick={() => {
            history.push('/');
          }}
        >
          Home
        </button>
      </div>
    );
  }

  return (
    <div className='posts'>
      {posts.map(({ userId, title, body }, index) => (
        <div key={index} className='post'>
          <div className='title'>{`User ${userId}: ${title}`}</div>
          <div className='body'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
