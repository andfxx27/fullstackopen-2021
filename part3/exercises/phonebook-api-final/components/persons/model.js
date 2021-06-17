const mongoose = require('mongoose')

// Schema with specific validation rules
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 1,
    required: true
  },
  phone: {
    type: String,
    minLength: 10,
    required: true
  }
})

// personSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString(),
//     delete returnedObject._id,
//     delete returnedObject.__v
//   }
// })

const Person = mongoose.model('Person', personSchema)

module.exports = Person