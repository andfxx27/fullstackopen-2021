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
  const person = {
    name: request.body.name,
    phone: request.body.phone
  }

  new personModel(person)
  .save()
  .then(result => {
    response.json(result)
  })
  .catch(error => next(error))
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