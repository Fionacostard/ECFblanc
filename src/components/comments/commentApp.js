import CommentList from './commentList';
import CommentForm from './commentForm';
import React, {useState} from 'react'; 

const CommentApp = () => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  return (
    <div className="comment-app">
      <CommentList comments={comments} />
      <CommentForm submitComment={addComment} />
    </div>
  );
};

export default CommentApp; 