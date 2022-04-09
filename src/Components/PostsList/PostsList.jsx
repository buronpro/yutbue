import "./PostsList.scss";

const PostsList = ({ children, className }) => {
  return <ul className={`${className}__list list`}>{children}</ul>;
};

export default PostsList;
