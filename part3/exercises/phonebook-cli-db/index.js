const mongoose = require('mongoose')

let mongoDBAtlasPassword = process.env.MONGODB_ATLAS_PASSWORD
if (mongoDBAtlasPassword === undefined) {
  // Validate that password must exists
  if (process.argv.length < 3) {
    console.log(`Please provide MongoDB Atlas' password as an argument: node index.js <password>`)
    process.exit(1)
  }
}

mongoDBAtlasPassword = process.argv[2]

const mongoDBAtlasConnectionString = `mongodb+srv://felixandersen:${mongoDBAtlasPassword}@express-api-playground.rj7vr.mongodb.net/db-phonebook?retryWrites=true&w=majority`

mongoose.connect(mongoDBAtlasConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useCreateIndex: true
})

const personSchema = new mongoose.Schema({
  name: String,
  phone: String
})

const Person = mongoose.model('Person', personSchema)

// Insert new entry if process.argv.length is exactly 5, assuming the argument is correct
if (process.argv.length === 5) {
  const name = process.argv[3]
  const phone = process.argv[4]
  const person = new Person({
    name,
    phone
  })

  person
    .save()
    .then(result => {
      console.log(`Added new entry: ${name} - ${phone}`)
    })
    .catch(error => {
      console.log('Error occured during adding entry: ', error)
    })
    .finally(() => mongoose.connection.close())
}

// View entries if process.argv.length is exactly 3, assuming the argument is correct
if (process.argv.length === 3) {
  Person
    .find({})
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log('Error occured during viewing entry: ', error)
    })
    .finally(() => mongoose.connection.close())
}

const viewMongoDBStatus = () => {
  console.log(mongoose.connection.readyState)
}

viewMongoDBStatus()