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
  // ...
  const post = await Post.create({
    userId: req.user._id,
    description,
    picturePath,
    likes: [],
    comments: []
  })
  if (!post) throw new ErrorResponse('Cant create post', 503)
  const posts = await Post.find().sort('-createdAt')
  res.status(200).json(posts)
})

export const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().sort('-createdAt').populate('userId', 'firstName lastName picturePath')
  res.status(200).json(posts)
})

export const getUsersPosts = asyncHandler(async (req, res) => {
  const { _id } = req.user
  const posts = await Post.find({ userId: _id }).sort('-createdAt')
  res.status(200).json(posts)
})

export const getPostById = asyncHandler(async (req, res) => {
  const { postId } = req.body
  const post = await Post.findById(postId)
  if (!post) return res.status(200).json({})
  res.status(200).json(post)
})

export const toggleLikePost = asyncHandler(async (req, res) => {
  // post id
  const { postId } = req.params
  const { _id } = req.user
  const liked = await Post.find({ _id: postId, likes: { $in: _id } })
  // nie ma postu, error
  // if (!post) throw new ErrorResponse('No post', 501)

  if (liked.length === 0) {
    await Post.updateOne({ _id: postId }, {
      $push: { likes: _id }
    })
  } else {
    await Post.updateOne({ _id: postId }, {
      $pull: { likes: _id }
    })
  }

  const post = await Post.find({_id: postId})


  res.status(200).json(post)
})

export const deletePostById = asyncHandler(async (req, res) => {
  throw new ErrorResponse('Not implemented yet', 501)
  // res.status(200).json({ message: "deletePostById" })
})



