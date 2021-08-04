import { useEffect } from 'react';
import './Posts.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setError } from '../../state/postsSlice';
import { useHistory } from 'react-router-dom';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import user5 from '../../assets/user5.png';
import user6 from '../../assets/user6.png';
import user7 from '../../assets/user7.png';
import user8 from '../../assets/user8.png';
import user9 from '../../assets/user9.png';
import user10 from '../../assets/user10.png';

const avatars = {
  1: user1,
  2: user2,
  3: user3,
  4: user4,
  5: user5,
  6: user6,
  7: user7,
  8: user8,
  9: user9,
  10: user10,
};

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
          <img
            src={avatars[userId]}
            className='user-avatar'
            alt='user avatar'
          />
          <div className='title'>{title}</div>
          <div className='body'>{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
