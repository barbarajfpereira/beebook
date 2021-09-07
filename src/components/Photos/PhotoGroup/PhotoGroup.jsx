import './PhotoGroup.scss';
import Photo from '../Photo/Photo';

import { useDispatch } from 'react-redux';
import { updatePhotos } from '../../../state/photosSlice';

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

const PhotoGroup = ({ photoGroup }) => {
  const dispatch = useDispatch();

  const handleRefreshClick = (albumId) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((newPhotos) => {
        dispatch(updatePhotos(newPhotos));
      });
  };

  const userId = photoGroup[0].albumId;

  return (
    <div className='photo-group'>
      <img src={avatars[userId]} className='user-avatar' alt='user avatar' />

      <div className='photos'>
        {/* show first 10 photos */}
        {photoGroup.slice(0, 10).map((photo, index) => (
          <Photo key={index} photo={photo} />
        ))}
      </div>

      <button className='refresh' onClick={() => handleRefreshClick(userId)}>
        Refresh
      </button>
    </div>
  );
};

export default PhotoGroup;
