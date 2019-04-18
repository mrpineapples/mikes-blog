import React, { Component } from 'react';
import styled from "styled-components";
import Blog from './blog';
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

class Home extends Component {
  state = {
    title: null,
    author: null,
    body: null
  }

  titleChangeHandler = e => {
    this.setState({title: e.target.value})
  }

  authorChangeHandler = e => {
    this.setState({author: e.target.value})
  }

  bodyChangeHandler = e => {
    this.setState({body: e.target.value})
  }

  postSubmitHandler = () => {
    if (this.state.title && this.state.author && this.state.body) {
      // Post to server
      const data = {
        title: this.state.title,
        author: this.state.author,
        body: this.state.body
      }

      fetch("/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(response => console.log(response))
      
      alert("Your posts was successful, Click Posts on the navbar to see your post")
    } else {
      alert("please fill out all fields")
    }
  }

  render() {
    return (
      <div className="App">
        <Title>
          <a className="twitter" href="https://twitter.com/MichaelMiranduh" target="_blank">
            <img src="http://pngimg.com/uploads/twitter/twitter_PNG15.png" />
          </a>
          <a className="title">Mike's Blog</a>
          <NavLink to="/posts" className="posts">Posts</NavLink>
        </Title>
        <Blog
          titleChange={this.titleChangeHandler}
          authorChange={this.authorChangeHandler}
          bodyChange={this.bodyChangeHandler}
          submit={this.postSubmitHandler} />
      </div>
    );
  }
}

export default Home;
