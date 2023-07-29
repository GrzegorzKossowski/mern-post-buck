import express from 'express'
import { protect, admin } from '../middleware/authMiddleware.js'
import { addFriend, deleteFriend, getUserProfile, getUsers } from '../controllers/user.controller.js'

const router = express.Router()

router
  .route('/')
  .get(protect, admin, getUsers)

router
  .route(['/:id'])
  .get(protect, getUserProfile)

router
  .route('/:id/friends')
  .patch(protect, addFriend)
  .delete(protect, deleteFriend)



export default router