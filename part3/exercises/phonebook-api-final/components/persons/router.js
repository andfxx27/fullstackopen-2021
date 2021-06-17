const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const personModel = require('./model')

router.get('/people', (request, response, next) => {
  personModel
  .find({})
  .then(result => {
      console.log(result)
      response.json(result)
  })
  .catch(error => next(error))
})

router.get('/people/:id', (request, response, next) => {
  const id = request.params.id

  personModel
    .findById(id)
    .then(result => {
      if (result) {
        response.json(result)
      } else {
        response.status(404).json({
          message: 'No entries found!'
        })
      }
    })
    .catch(error => next(error))
})

router.post('/people', (request, response, next) => {
  if (!request.body.name || !request.body.phone) {
    return response.status(400).json({
      error: 'required: [name, phone]'
    })
  }

  const person = {
    name: request.body.name,
    phone: request.body.phone
  }

  new personModel(person)
  .save()
  .then(result => {
    return result.toJSON() // Explicitly calling .toJSON() in promise chaining
  })
  .then(result => {
    response.json(result) // Usually .toJSON() will be called here before being sent as response
  })
  .catch(error => next(error)) // Will also catch error caused by built-in mongoose schema validator
})

router.put('/people/:id', (request, response, next) => {
  const person = {
    name: request.body.name,
    phone: request.body.phone
  }

  personModel
    .findByIdAndUpdate(request.params.id, person, {new: true})
    .then(result => {
      response.json(result)
    })
    .catch(error => next(error))
})

router.delete('/people/:id', (request, response, next) => {
  personModel
    .findByIdAndRemove(request.params.id)
    .then(result => {
      if (result) {
        response.status(204).json({
          message: 'delete phonebook success'
        })
      } else {
        response.status(404).json({
          error: 'phonebook not found'
        })
      }
    })
    .catch(error => next(error))
})

module.exports = router