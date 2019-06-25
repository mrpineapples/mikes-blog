import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledDiv = styled.div`
  text-align: center;
  width: 50%;
  max-width: 30rem;
  min-width: 15rem;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid black;
  box-shadow: 5px 10px #888888;
  word-break: break-word;

  & h5 {
    margin-top: 8px;
  }

  & p {
    margin-top: 1rem;
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3ee6ef;
  color: #fff;
  padding: 1rem 0;
  font-size: 20px;

  & .twitter img {
    width: 25px;
    margin-left: 2rem;
    margin-top: 5px;
  }

  & .title {
    position: absolute;
  }

  & .home {
    color: #ffffff;
    text-decoration: none;
    margin-left: auto;
    margin-right: 2rem;
    cursor: pointer;
  }
`

const Posts = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/posts")
      .then(res => res.json())
      .then(posts => setData(posts))
  }, [])

  return (
    <Fragment>
      <Title>
        <a className="twitter" href="https://twitter.com/MichaelMiranduh" target="_blank" rel="noopener noreferrer">
          <img src="http://pngimg.com/uploads/twitter/twitter_PNG15.png" alt="Twitter Bird"/>
        </a>
        <span className="title">Mike's Blog</span>
        <NavLink to="/" className="home">Home</NavLink>
      </Title>
      {data.map((post, index) => (
        <StyledDiv key={index}>
          <h2>{post.title}</h2>
          <h5>{post.author}</h5>
          <p>{post.body}</p>
        </StyledDiv>
      ))}
    </Fragment>
  )
};

export default Posts;