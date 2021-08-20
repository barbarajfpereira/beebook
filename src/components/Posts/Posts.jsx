import { useEffect } from 'react';
import './Posts.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, setLoading, setError } from '../../state/postsSlice';
import { useHistory } from 'react-router-dom';

import PostGroup from './PostGroup/PostGroup';

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
        .then((newPosts) => {
          dispatch(setPosts(newPosts));
        })
        .catch(() => {
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
        <div className='loader' />
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

  if (posts.length === 0) {
    return null;
  }

  let postGroups = [];

  posts.forEach((post) => {
    const matchingIndex = postGroups.findIndex(
      (postGroup) => postGroup[0].userId === post.userId
    );

    if (matchingIndex !== -1) {
      postGroups[matchingIndex].push(post);
    } else {
      postGroups.push([post]);
    }
  });

  const sortedPostGroups = postGroups.sort((a, b) => a[0].userId - b[0].userId);

  return (
    <div className='posts'>
      {sortedPostGroups.map((postGroup, index) => (
        <PostGroup key={index} postGroup={postGroup} />
      ))}
    </div>
  );
};

export default Posts;
