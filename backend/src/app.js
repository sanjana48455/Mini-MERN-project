const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./model/post.model");
const cors = require("cors");
const connectDB = require("./db/db");

const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        await connectDB();

        console.log("BODY:", req.body);
        console.log("FILE:", req.file);

        if (!req.file) {
            return res.status(400).json({
                message: "Image is required"
            });
        }

        const result = await uploadFile(req.file.buffer);

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        });

        return res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        console.log("Error creating post:", error);

        return res.status(500).json({
            message: "Failed to create post",
            error: error.message
        });
    }
});

app.get("/posts", async (req, res) => {
    try {
        await connectDB();

        const posts = await postModel.find();

        return res.status(200).json({
            message: "Posts fetched successfully",
            posts
        });

    } catch (error) {
        console.log("Error fetching posts:", error);

        return res.status(500).json({
            message: "Failed to fetch posts",
            error: error.message
        });
    }
});

module.exports = app;