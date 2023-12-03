import './style.css'

const PostView = ({ id, body }) => {
  return (
    <p className="post-view">
      <b>{id}:</b> {body}
    </p>
  );
};

export default PostView;
