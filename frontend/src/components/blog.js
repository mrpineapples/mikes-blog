import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 2rem 0;
  text-align: center;
`

const StyledInput = styled.input`
  width: 15rem;
  margin-top: .5rem;
  margin-bottom: 2rem;
  text-align: center;
  
  &:focus {
    outline: none;
  }
`

const StyledLabel = styled.label`
  display: block;
`

const StyledTextarea = styled.textarea`
  width: 15rem;
  height: 10rem;
  min-height: 5rem;
  min-width: 15rem;
  max-width: 15rem;
  margin-top: .5rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
  }
`

const Button = styled.a`
  cursor: pointer;
  padding: .5rem 5.9rem;
  background-color: white;
  border: 1px solid black;
  text-align: center;

  &:hover {
    background-color: black;
    color: white;
  }
`

const Blog = props => (
  <StyledDiv>
    <h2 style={{marginBottom: "3rem"}}>Submit your blog post below!</h2>
      <StyledLabel>
        <p>Title</p>
        <StyledInput 
          type="text"
          onChange={e => props.titleChange(e)} />
      </StyledLabel>
      <StyledLabel>
        <p>Author</p>
        <StyledInput 
          type="text"
          onChange={e => props.authorChange(e)} />
      </StyledLabel>
      <StyledLabel>
        <p>Body</p>
        <StyledTextarea 
          onChange={e => props.bodyChange(e)}/>
      </StyledLabel>
      <Button onClick={() => props.submit()}>Submit</Button>
  </StyledDiv>
)

export default Blog;