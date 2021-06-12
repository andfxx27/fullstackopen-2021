// Dummy logger for testing purposes

const logger = (request, response, next) => {
  console.log('Just a random logger middleware passing by ...')
  next()
}

module.exports = logger