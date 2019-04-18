import React, { Component, Fragment } from "react";
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
    color: white;
    text-decoration: none;
    margin-left: auto;
    margin-right: 2rem;
    cursor: pointer;
  }
`

class Posts extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    fetch("/posts")
      .then(res => res.json())
      .then(posts => this.setState({data: posts}))
  }

  render() {
    return (
      <Fragment>
        <Title>
          <a className="twitter" href="https://twitter.com/MichaelMiranduh" target="_blank">
            <img src="http://pngimg.com/uploads/twitter/twitter_PNG15.png" />
          </a>
          <a className="title">Mike's Blog</a>
          <NavLink to="/" className="home">Home</NavLink>
        </Title>
        {this.state.data.map((post, index) => (
          <StyledDiv key={index}>
            <h2>{post.title}</h2>
            <h5>{post.author}</h5>
            <p>{post.body}</p>
          </StyledDiv>
        ))}
      </Fragment>
    )
  }
}

export default Posts;