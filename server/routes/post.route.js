import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import { getPosts, createPost, getPostById, likePost } from '../controllers/post.controller.js'
import upload from '../middleware/storage.js'

const router = express.Router()

router
  .route('/')
  .post(protect, upload.single('picture'), createPost)
  .get(getPosts)

router
  .route('/:userId/posts')
  .get(protect, getPostById)

router
  .route('/:postId/like')
  .patch(protect, likePost)



export default router