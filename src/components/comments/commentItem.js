import React from 'react';
import styled from "styled-components"; 

const CommentItem = ({ comment }) => {
    const { name, content,note} = comment;
  
    return (
      <Wrapper>
      <div className="comment-item">
        <div className="comment-author">{name}</div>
        <div className="a-comment">
          <div className="comment-content">{content}</div>
          <div className="comment-note">{note}/5</div>
        </div>
      </div>
      </Wrapper>
    );
  }
export default CommentItem;

const Wrapper = styled.div`
.comment-author{
 color: ${(props) => props.theme.fontColor};
 font-size: 1.5em; 
 widht: 800px; 
  margin-left: 15vw;
}

.comment-content{
  color: ${(props) => props.theme.fontColor};
  widht: 800px; 
  margin-left: 15vw;
}

.comment-note{
text-align: right; 
widht: 400px; 
margin-right: 15vw;
}

.a-comment{
  display: flex; 
  flex-direction:row; 
  justify-content:space-between;
}

.comment-item{
  margin-top: 2vh; 
  margin-bottom: 2vh;
  background-color: rgba(114, 90, 96, 0.4);
  width: 70%;
  margin-left: 14vw;
}

`; 