import './Post.scss';

const Post = ({ post }) => {
  return (
    <div className='post'>
      <div className='title'>{post.title}</div>

      <div className='body'>{post.body}</div>
    </div>
  );
};

export default Post;
