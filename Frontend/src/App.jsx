import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/feed'

const Home = () => {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      <h1>Welcome to My Mini MERN Project</h1>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/create-post">
          <button>Create Post</button>
        </Link>

        <Link to="/feed">
          <button>View Feed</button>
        </Link>
      </div>
    </section>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/create-post"
          element={<CreatePost />}
        />

        <Route
          path="/feed"
          element={<Feed />}
        />

        <Route
          path="/about"
          element={<h1>hello world</h1>}
        />

      </Routes>
    </Router>
  )
}

export default App