import ErrorResponse from '../middleware/ErrorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import Post from '../models/Post.model.js';

// GET all posts
// GET post by ID
// GET users posts
// GET user post by ID

export const createPost = asyncHandler(async (req, res, next) => {

  const { description, picturePath } = req.body
  // check description and picturePath

  const post = await Post.create({
    userId: req.user._id,
    description,
    picturePath,
    likes: {},
    comments: []
  })

  const posts = await Post.find().sort('-createdAt')
  res.status(200).json(posts)
})

export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort('-createdAt').populate('userId', 'firstName lastName picturePath')
  res.status(200).json(posts)
})

export const getPostById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "getPostById by Id" })
})

export const likePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "likePost by Id" })
})

export const deletePostById = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "deletePostById" })
})


