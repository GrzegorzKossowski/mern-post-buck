import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import { getAllPosts, createPost, getPostById, toggleLikePost, deletePostById, getUsersPosts } from '../controllers/post.controller.js'
import upload from '../middleware/storage.js'

const router = express.Router()

// api/v1/posts...
// get all posts
// 


router
  .route('/')
  // get all posts
  .get(protect, getAllPosts)  
  .post(protect, upload.single('picture'), createPost)

router
  .route('/:userId/posts')
  .get(protect, getUsersPosts)
  .delete(protect, deletePostById)

router
  .route('/:postId/like')
  .patch(protect, toggleLikePost)



export default router