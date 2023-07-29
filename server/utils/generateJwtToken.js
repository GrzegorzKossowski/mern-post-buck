import jwt from 'jsonwebtoken'
/**
 * 
 * @param response obiekt http response
 * @param string userId - string id uzera
 */
export const generateToken = (res, userId) => {
  // wygeneruj token za pomocą biblioteki jwt, dodaj secret i inne ustawienia,
  // np. datę wygaśnięcia
  const token = jwt
    .sign({ userId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }) //30d

  // JWT as HTTP-Only cookie
  // ustaw obiekt cookie w responsie o nazwie `jwt`.
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 3 * 24 * 60 * 60 * 1000 //3 days
  })
}