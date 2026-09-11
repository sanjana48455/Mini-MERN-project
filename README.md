# Mini MERN Project

A simple full-stack social media application built using the MERN stack.

Users can upload their favorite photos, add captions, view all posts in a feed, and delete posts.

## Features

- Upload an image
- Add a caption to the image
- Store post information in MongoDB
- Store uploaded images using ImageKit
- Display all posts in a Feed page
- Delete posts
- REST API integration
- Responsive and simple frontend
- Deployed using Vercel

## Technologies Used

### Frontend

- React.js
- React Router
- Axios
- HTML
- CSS

### Backend

- Node.js
- Express.js
- Multer
- Mongoose
- CORS

### Database & Storage

- MongoDB
- MongoDB Atlas
- ImageKit

### Deployment

- Vercel

## Project Structure

```text
Mini-MERN-Project/
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── CreatePost.jsx
│   │   │   └── feed.jsx
│   │   └── App.jsx
│   │
│   └── package.json
│
└── Backend/
    ├── src/
    │   ├── app.js
    │   ├── db/
    │   │   └── db.js
    │   ├── model/
    │   │   └── post.model.js
    │   └── services/
    │       └── storage.service.js
    │
    ├── server.js
    └── package.json

How It Works
1. Create Post

The user selects a favorite photo and enters a caption.

The frontend sends the image and caption to the backend using Axios and FormData.

2. Image Upload

The backend receives the image using Multer and uploads it to ImageKit.

3. MongoDB

After the image is uploaded, the ImageKit URL and caption are stored in MongoDB.

Example document:

{
  "image": "https://ik.imagekit.io/...",
  "caption": "My favorite photo"
}
4. Feed

The Feed page fetches posts from the backend using:

GET /posts

All posts are displayed on the Feed page.

5. Delete Post

Each post has a Delete button.

When the user clicks Delete, the frontend sends:

DELETE /posts/:id

The corresponding post is removed from MongoDB.

API Endpoints
Method	Endpoint	Description
POST	/create-post	Create a new post
GET	/posts	Fetch all posts
DELETE	/posts/:id	Delete a post
Environment Variables

Create a .env file in the backend:

MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

Do not upload .env files or secret keys to GitHub.

Running the Project Locally
Backend
cd Backend
npm install
node server.js

The backend runs on:

http://localhost:3000
Frontend

Open another terminal:

cd Frontend
npm install
npm run dev
Live Project

The project is deployed on Vercel.

Live Website:

https://mini-mern-project.vercel.app/

Future Improvements :
User authentication
Like and comment functionality
Edit posts
User profiles
Pagination
Image deletion from ImageKit when a post is deleted

Author
Sanjana K.S.
