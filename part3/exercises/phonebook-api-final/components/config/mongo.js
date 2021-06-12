const mongoose = require('mongoose')

const mongoDBConnectionString = process.env.MONGODB_ATLAS_URI

console.log('Connecting to MongoDB...')

mongoose.connect(mongoDBConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})
.then(result => {
  console.log('Connected to MongoDB!')
})
.catch(error => {
  console.log('Error connecting to MongoDB: ', error.message)
})