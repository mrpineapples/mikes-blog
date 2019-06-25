import React, { useState } from 'react';
import styled from "styled-components";
import Blog from './Blog';
import { NavLink } from "react-router-dom";

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

  & .posts {
    color: white;
    text-decoration: none;
    margin-left: auto;
    margin-right: 2rem;
    cursor: pointer;
  }
`

const Home = props => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [body, setBody] = useState(null);

  const titleChangeHandler = e => {
    setTitle(e.target.value)
  }

  const authorChangeHandler = e => {
    setAuthor(e.target.value)
  }

  const bodyChangeHandler = e => {
    setBody(e.target.value)
  }

  const postSubmitHandler = () => {
    if (title && author && body) {
      // Post to server
      const data = {
        title: title,
        author: author,
        body: body
      }

      fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(response => console.log(response))
      
      alert("Your post was successful, click on Posts in the navbar to see your post!")
    } else {
      alert("You forgot to fill out some fields 🙃")
    }
  }

  return (
    <div className="App">
      <Title>
        <a className="twitter" href="https://twitter.com/MichaelMiranduh" target="_blank" rel="noopener noreferrer">
          <img src="http://pngimg.com/uploads/twitter/twitter_PNG15.png" alt="Twitter Bird" />
        </a>
        <span className="title">Mike's Blog</span>
        <NavLink to="/posts" className="posts">Posts</NavLink>
      </Title>
      <Blog
        titleChange={titleChangeHandler}
        authorChange={authorChangeHandler}
        bodyChange={bodyChangeHandler}
        submit={postSubmitHandler} />
    </div>
  );
}

export default Home;
