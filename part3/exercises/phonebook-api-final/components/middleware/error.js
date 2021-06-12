const errorHandler = (error, request, response, next) => {
  console.error(error)

  if (error.name === 'CastError') {
    response.status(400).json({
      error: 'invalid id format'
    })
  }

  next(error)
}

module.exports = errorHandler