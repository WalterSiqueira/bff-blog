import React, { useState, useEffect } from 'react';
import { Header } from './subcomponents/header';
import '../Assets/home.css';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/posts');
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div className="container">
      <Header />

      <div className="subheader">
        <h1 className="title">Posts</h1>
      </div>

      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <ul className="posts-list">
          {posts.map((post, index) => (
            <li key={index} className="post-item">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.content}</p>
              <p className="post-username">Created by: {post.username}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;

