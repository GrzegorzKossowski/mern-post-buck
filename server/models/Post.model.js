import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema({
  // owner of post
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  description: String,
  picturePath: String,
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  comments: {
    type: Array,
    default: []
  },
}, {
  timestamps: true
})

const Post = mongoose.models.Post || model("Post", postSchema)
export default Post