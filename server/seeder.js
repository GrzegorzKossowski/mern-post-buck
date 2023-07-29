import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk'
import { connectDB } from './config/db.js';
import { fakePosts, fakeUsers } from './data/index.js'
import User from './models/User.model.js';
import Post from './models/Post.model.js';

dotenv.config();
connectDB();

const populateDB = async () => {
  try {
    await User.deleteMany()
    await User.insertMany(fakeUsers)
    await Post.deleteMany()
    await Post.insertMany(fakePosts)
    console.log(chalk.black.bgGreen(`Data imported!`));
    process.exit()
  } catch (error) {
    console.error(chalk.red(`Error importing data\n ${error}`));
    process.exit(1)
  }

}

populateDB()

  // if (process.argv[2] === '-d') {
  //   destroyData();
  // } else {
  //   importData();
  // }