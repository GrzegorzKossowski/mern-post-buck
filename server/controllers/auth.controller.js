import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.model.js';
import { generateToken } from '../utils/generateJwtToken.js';
import ErrorResponse from '../middleware/ErrorResponse.js'

export const registerUser = asyncHandler(async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    picturePath,
    location,
    occupation,
  } = req.body

  // sprawdza, czy uzer o tym mailu istnieje
  const userExists = await User.findOne({ email }).select('-password')
  // jeśli istnieje, wywala błąd, aby nie rejestrować drugiego o tym samym
  // mailu (który jest unikalny zgodnie z modelem User)
  if (userExists) {
    console.log(userExists);
    throw new ErrorResponse(`User already exists`, 409)
  }
  // here check all data if valid
  // ....

  // let's assume, they are valid... :-)
  // jeśli nie ma uzera o tym mailu, stwórz nowego o tych danych
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    picturePath,
    location,
    occupation,
  })

  // jeśli udało się stworzyć uzera, przeprowadź proces autoryzacji
  if (user) {
    const { _id } = user
    // na podstawie danych wygeneruj token
    generateToken(res, _id)
    // zwróc dane uzera dla klienta
    return res.status(201).json({
      _id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      picturePath: user.picturePath,
      friends: user.friends,
      location: user.location,
      occupation: user.occupation,
      viewedProfile: user.viewedProfile,
      impressions: user.impressions,
      isAdmin: user.isAdmin
    })
  } else {
    throw new ErrorResponse(`Invalid user data`, 500)
  }

})

export const loginUser = asyncHandler(async (req, res, next) => {
  // pobierz dane z requesta (z przysłanego formularza jako body)
  const { email, password } = req.body
  // znajdź w bazie na podstawie emaila, ustawionego w modelu jako
  // niepowtarzalny (nie może być takich samych emaili w bazie)
  const user = await User.findOne({ email })
  // jeśli jest uzer w bazie o  tym emailu i jego hasło się zgadza
  // na podstawie bcrypta (który działa asynchronicznie)
  if (user && (await user.matchPassword(password))) {
    // wyciągnij z bazy dane uzera (bez hasła)
    const { _id, firstName, lastName, email, isAdmin } = user
    // wygeneruj token funkcją pomocniczą
    generateToken(res, _id)
    // zwróc dane do klienta wraz z tokenem
    return res.status(200).json({ _id, firstName, lastName, email, isAdmin })
  }
  throw new ErrorResponse(`Invalid login data`, 400)
})

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
export const logoutUser = (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
};