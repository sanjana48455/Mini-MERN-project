import React, { useState, useEffect } from 'react';
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {

    axios.get("https://mini-mern-project-3utv.vercel.app/posts")
      .then((res) => {
        console.log("Posts fetched successfully");
        console.log(res.data.posts);
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("Error fetching posts:", error);
      });

  }, []);

  const deletePost = (id) => {

    axios.delete(`https://mini-mern-project-3utv.vercel.app/posts/${id}`)
      .then(() => {
        console.log("Post deleted successfully");

        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((error) => {
        console.log("Error deleting post:", error);
      });

  };

  return (
    <section className="feed-section">

      <h1>Feed</h1>

      <div className="posts-container">

        {posts.map((post) => (

          <div className="post" key={post._id}>

            <img
              src={post.image}
              alt="Post"
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto"
              }}
            />

            <p>{post.caption}</p>

            <button onClick={() => deletePost(post._id)}>
              Delete
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Feed;