const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service");
const postModel = require("./model/post.model");
const cors = require("cors")

const app = express();
app.use(cors())

app.use(express.json());

const upload = multer({
    storage: multer.memoryStorage()
});

app.post('/create-post', upload.single('image'), async (req, res) => {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const result = await uploadFile(req.file.buffer);

    console.log(result);

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    });

    return res.status(201).json({
        message: "Post created successfully",
        post
    });
});

app.get("/posts", async (req, res) => {

    const posts = await postModel.find();

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    });
});

module.exports = app;