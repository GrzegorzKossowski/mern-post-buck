// https://youtu.be/K8YELRmUb5o&t=5408
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
// import colorizer conslole logs
import chalk from 'chalk'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from './config/db.js'
import { errorHandler, notFound } from './middleware/error.js'

/* CONFIG */
dotenv.config()
// connect to MongoDB
connectDB()
// create own __dirname (walkaround) when using type: modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
// allow to read the body of req
app.use(express.json({ limit: '30mb' }))
// allow to read body as form data
app.use(express.urlencoded({ extended: true, limit: '30mb' }))
// ↓ is it necessary???
// app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
// app.use(bodyParser.json({ extended: true, limit: '30mb' }))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
// standard logger with options
// app.use(morgan('common'))
app.use(cors())
app.use(cookieParser());
// set static public folder
app.use('/static', express.static(path.join(__dirname, 'public')))

// file storage multer
// https://github.com/expressjs/multer#readme
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/assets')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname)
//   },
// })
// const upload = multer({ storage })


import authRoutes from './routes/auth.route.js'
app.use(`/api/${process.env.VERSION}/auth`, authRoutes)
import userRoutes from './routes/user.route.js'
app.use(`/api/${process.env.VERSION}/users`, userRoutes)
import postRoutes from './routes/post.route.js'
app.use(`/api/${process.env.VERSION}/posts`, postRoutes)

app.use(`/api/${process.env.VERSION}`, (req, res, next) => {
  res.json({ message: 'API works' })
})

// middlewares
// use error handler at the end of actions
app.use(notFound)
app.use(errorHandler)

// set PORT
const PORT = process.env.PORT || 5000
// run server
const server = app.listen(PORT, () => console.log(`Server running on port ${chalk.yellow(process.env.PORT)} in ${chalk.green(process.env.NODE_ENV)} mode \nhttp://localhost:5000`))
// if sth. goes wrong handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`${chalk.red("Error:")} ${err.message}`);
  server.close(() => process.exit(1))
})