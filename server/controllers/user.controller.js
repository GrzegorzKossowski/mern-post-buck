import ErrorResponse from '../middleware/ErrorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.model.js';


// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User
    .findById(req.user._id)
    .select('-password')
    .populate('friends', 'id firstName lastName picturePath');

  if (user) {
    return res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      friends: user.friends
    })
  }
  throw new ErrorResponse('User not found', 204);
});

export const addFriend = asyncHandler(async (req, res, next) => {

  const { friendId } = req.body
  // check if User exists
  const friend = await User.findById({ _id: friendId })
  if (!friend) throw new ErrorResponse(`User doesn't exist`, 400)

  // pobrać id usera z req
  const { _id } = req.user
  // dodać frienda do usera
  const currentUser = await User.findById(_id)
  const hasFriend = currentUser.friends.includes(friendId)
  if (hasFriend) throw new ErrorResponse(`User already in friends`, 409)

  let modifiedUser = await User
    .findOneAndUpdate({ _id }, {
      $push: { friends: friendId }
    })
  if (!modifiedUser) throw new ErrorResponse(`Impossible to add friend`, 500)

  const user = await User.findById(_id)
  res.status(201).json({ message: "add friend", friends: user.friends })

})

export const deleteFriend = asyncHandler(async (req, res, next) => {
  const { friendId } = req.body
  const { _id } = req.user
  await User.updateOne({ _id }, {
    $pullAll: {
      friends: [friendId]
    }
  })
  const user = await User.findById(_id).select('-password')
  res.status(200).json(user)
})

/* ADMIN CONTROLLERS */

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});