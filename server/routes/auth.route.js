import express from 'express'
import { registerUser, loginUser, logoutUser } from '../controllers/auth.controller.js'
import upload from '../middleware/storage.js'

const router = express.Router()

router
  .route('/register')
  .post(upload.single('picture'), registerUser)
router
  .route('/login')
  .post(loginUser)
router
  .get('/logout', logoutUser);

export default router