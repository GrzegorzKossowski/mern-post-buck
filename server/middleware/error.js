export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {

  let error = { ...err }
  error.message = err.message

  return res
    .status(error.statusCode || 500)
    .json({
      status: error.statusCode || 500,
      message: error.message || 'Server Error',
      stack: process.env.NODE_ENV === 'production' ? "production" : error.stack,
    })
}