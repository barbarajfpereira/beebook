import './Photos.scss';
import PhotoGroup from './PhotoGroup/PhotoGroup';
import { setPhotos, setLoading, setError } from '../../state/photosSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

// create a dicionary
// const albums = {
//   albumId: userId,
// };

const Photos = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const photos = useSelector((state) => state.photos.value);
  const loading = useSelector((state) => state.photos.loading);
  const error = useSelector((state) => state.photos.error);

  useEffect(() => {
    if (photos.length === 0) {
      dispatch(setLoading(true));

      // create an albums call
      // fetch('https://jsonplaceholder.typicode.com/albums')

      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          if (!response.ok) {
            throw Error();
          }
          return response.json();
        })
        .then((newPhotos) => {
          dispatch(setPhotos(newPhotos));
        })
        .catch(() => {
          dispatch(setError(true));
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    }

    // callback on unmount
    return () => {
      if (error) {
        dispatch(setError(false));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className='photos-loading'>
        <div className='loader' />
      </div>
    );
  }

  if (error) {
    return (
      <div className='photos-error'>
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

  if (photos.length === 0) {
    return null;
  }

  let photoGroups = [];

  photos.forEach((photo) => {
    const matchingIndex = photoGroups.findIndex(
      // from albumId to albums' userId to associate photo with user

      (photoGroup) => photoGroup[0].albumId === photo.albumId
    );

    if (matchingIndex !== -1) {
      photoGroups[matchingIndex].push(photo);
    } else {
      photoGroups.push([photo]);
    }
  });

  const sortedPhotoGroups = photoGroups.sort(
    (a, b) => a[0].albumId - b[0].albumId
  );

  return (
    <div className='photos'>
      {/* show first 10 photoGroup */}
      {sortedPhotoGroups.slice(0, 10).map((photoGroup, index) => (
        <PhotoGroup key={index} photoGroup={photoGroup} />
      ))}
    </div>
  );
};

export default Photos;
