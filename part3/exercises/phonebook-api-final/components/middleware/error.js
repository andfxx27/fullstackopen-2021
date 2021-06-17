const errorHandler = (error, request, response, next) => {
  console.error(error)

  if (error.name === 'CastError') {
    response.status(400).json({
      error: 'invalid id format'
    })
  }

  if (error.name == 'ValidationError') {
    response.status(400).json({
      error: error.message
    })
  }

  next(error)
}

module.exports = errorHandler