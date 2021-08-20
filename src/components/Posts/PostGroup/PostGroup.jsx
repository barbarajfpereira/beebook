import Post from '../Post/Post';
import './PostGroup.scss';

import { useDispatch } from 'react-redux';
import { updatePosts } from '../../../state/postsSlice';

import user1 from '../../../assets/user1.png';
import user2 from '../../../assets/user2.png';
import user3 from '../../../assets/user3.png';
import user4 from '../../../assets/user4.png';
import user5 from '../../../assets/user5.png';
import user6 from '../../../assets/user6.png';
import user7 from '../../../assets/user7.png';
import user8 from '../../../assets/user8.png';
import user9 from '../../../assets/user9.png';
import user10 from '../../../assets/user10.png';

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

const PostGroup = ({ postGroup }) => {
  const dispatch = useDispatch();

  const handleRefreshClick = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then((response) => response.json())
      .then((newPosts) => {
        dispatch(updatePosts(newPosts));
      });
  };

  const userId = postGroup[0].userId;

  return (
    <div className='post-group'>
      <img src={avatars[userId]} className='user-avatar' alt='user avatar' />

      {postGroup.map((post, index) => (
        <Post key={index} post={post} />
      ))}

      <button className='refresh' onClick={() => handleRefreshClick(userId)}>
        Refresh
      </button>
    </div>
  );
};

export default PostGroup;
