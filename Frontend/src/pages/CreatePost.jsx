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
      .then((res) => {

        console.log("Post deleted successfully");

        setPosts(posts.filter((post) => post._id !== id));

      })
      .catch((error) => {

        console.log("Error deleting post:", error);

      });

  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        background: "linear-gradient(135deg, #ffe0ec, #e0f2ff, #fff3cd)",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#5b21b6",
          fontSize: "38px",
          marginBottom: "35px"
        }}
      >
        ✨ My Colorful Feed ✨
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px"
        }}
      >

        {posts.map((post) => (

          <div
            className="post"
            key={post._id}
            style={{
              width: "280px",
              padding: "18px",
              borderRadius: "20px",
              background: "white",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              textAlign: "center",
              transition: "transform 0.2s"
            }}
          >

            <img
              src={post.image}
              alt="Post"
              style={{
                width: "100%",
                height: "230px",
                objectFit: "cover",
                borderRadius: "15px",
                display: "block"
              }}
            />

            <p
              style={{
                color: "#374151",
                fontSize: "18px",
                fontWeight: "500",
                margin: "18px 5px"
              }}
            >
              {post.caption}
            </p>

            <button
              onClick={() => deletePost(post._id)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold"
              }}
            >
              🗑️ Delete
            </button>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Feed;