const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json()) // parse incoming json request body

// any :body token in the custom log format will be handled by this handler
morgan.token('body', (request) => {
  if (request.method === 'POST') {
    return JSON.stringify(request.body)
  }
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// Dummy middleware to log incoming request
const requestLogger = (request, response, next) => {
  console.log(`Method: ${request.method}`)
  console.log(`Path: ${request.path}`)
  console.log('Body: ', request.body)
  next()
}

let phonebookEntries = [
  {
      "id": 1,
      "name": "Arto Hellas",
      "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Felix Andersen",
    "number": "040-423126"
  }
]

app.get('/', (request, response) => {
  response.send('Hello world from phonebook backend')
})

app.get('/info', (request, response) => {
  const stringResponse = `
    <p>Phonebook has info for ${phonebookEntries.length} people.</p>
    <p>${new Date()}</p>
  `
  response.send(stringResponse)
})

app.get('/api/persons', (request, response) => {
  response.json(phonebookEntries)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = phonebookEntries.find(person => person.id === id)
  if (person) {
    return response.json(person)
  } 

  response.status(404).end()
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  
  // Check if phonebook entries with requested id exists
  const person = phonebookEntries.find(person => person.id === id)
  if (person) {
    phonebookEntries = phonebookEntries.filter(person => person.id !== id)
    return response.status(204).end()
  }

  response.status(404).json({
    "error": `no entries found with id ${id}`
  })
})

const generateUniqueId = ids => {
  let id = 0
  while (true) {
    id = Math.floor(Math.random() * 10000)
    if (!ids.includes(id)) {
      break
    }
  }

  return id
}

const nameIsUnique = name => {
  const names = phonebookEntries.map(person => person.name)
  return !names.includes(name)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  // name and number field in request body is required
  if (!body.name || !body.number) {
    return response.status(400).json({
      "error": {
        "name": "name field is required",
        "number": "number field is required"
      }
    })
  }

  // name must be unique
  if (!nameIsUnique(body.name)) {
    return response.status(400).json({
      "error": {
        "name": "name field must be unique"
      }
    })
  } 
  
  const person = {
    id: generateUniqueId(phonebookEntries.filter(person => person.id)),
    name: body.name,
    number: body.number
  }

  phonebookEntries = phonebookEntries.concat(person)

  response.json(person)
})

// Only called if none of request handler above understand the path
const unknownEndpointHandler = (request, response) => {
  response.status(404).send({error: 'unknown endpoint'})
}

app.use(unknownEndpointHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})