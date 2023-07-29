import mongoose, { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 50
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
    min: 4,
    max: 50,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    // select: false,
    minlength: 6,
    max: 50,
  },
  picturePath: {
    type: String,
    default: '',
  },
  // friends: {
  //   type: Array,
  //   default: []
  // },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  location: String,
  occupation: String,
  viewedProfile: { type: Number, default: 0 },
  impressions: { type: Number, default: 0 },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
})

/**
 * Przed zapisem uzera do bazy sprawdza, czy zostało zmodyfikowane hasło.
 * Jeśli nie, przepuszcza dalej.
 * Jeśli tak, generuje sól do hasha, następnie tworzy nowe hasło.
 */
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

/**
 * 
 * @param string  enteredPassword 
 * @returns       boolean
 * Metoda sprawdza, czy hasło tekstowe jest takie samo, jak hasło
 * zaszyfrowane z bazy. Zwraca true/false
*/
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}


// tworzy model klasy User
const User = mongoose.models.User || model("User", userSchema)
export default User