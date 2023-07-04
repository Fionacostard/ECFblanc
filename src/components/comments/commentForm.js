import React, { useState } from 'react';
import styled from "styled-components"; 

const CommentForm = ({ submitComment }) => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
    
      submitComment({ name,note, content });
  
      setName('');
      setNote(''); 
      setContent('');
    };
  
    return (
    <Wrapper>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select name="notation" id="note-select" onChange={(e)=> setNote(e.target.value)}>
            <option value="">--Notez sur 5--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <textarea
          placeholder="commentaire"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Poster</button>
      </form>
      </Wrapper>
    );
  };

  export default CommentForm;

  const Wrapper = styled.div`
 
button{
    background-color: ${(props) => props.theme.brandColor}; 
    border:1px solid ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.backgroundColor};
    padding: 10px;   
}

button:hover{
    background-color: ${(props) => props.theme.accentColor};
}

form{
    display: flex; 
    flex-direction: column; 
    gap: 12px; 
    margin-bottom: 12px; 
    width: 70%;
    margin-left: auto; 
    margin-right: auto; 
}
`;



