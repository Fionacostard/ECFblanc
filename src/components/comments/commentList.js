import React from 'react';
import CommentItem from './commentItem.js';
import styled from "styled-components"; 

const CommentList = ({ comments }) => {
  return (
    <Wrapper>
    <div className="comment-list">
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          comment={comment}/>
      ))}
    </div>
    </Wrapper>
  );
};

  export default CommentList;

  const Wrapper = styled.div`
  margin-top:4px ; 
  `; 

