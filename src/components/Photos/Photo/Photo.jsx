import './Photo.scss';

const Photo = ({ photo: { id, thumbnailUrl } }) => {
  return (
    <div>
      {/* {id} */}
      <img src={thumbnailUrl} className='photo' alt='user pic' />
    </div>
  );
};

export default Photo;
