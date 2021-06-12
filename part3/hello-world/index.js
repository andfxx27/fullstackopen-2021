const express = require('express')
const cors = require('cors')
const app = express()

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
]

// Allow cross-origin request
app.use(cors())

// Parse incoming request body json
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello World! Simple express web server</h1>')
})

const generateUniqueId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(
    note => note.id
  )) : 0

  return maxId + 1
}

// Create single note
// json-parser (express.json()) takes the JSON data of a request, transform it into js object-
// -and attaches it to the body property of request object before the handler is called
app.post('/rest/notes', (request, response) => {
  const body = request.body
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    id: generateUniqueId(),
    content: body.content,
    important: body.important || false,
    date: new Date(),
  }

  notes = notes.concat(note)

  response.json(note)
})

// Get all notes
app.get('/rest/notes', (request, response) => {
  response.json(notes)
})

// Get single note by id
app.get('/rest/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id === id)
  
  if (note) {
    response.json(note)
  }

  // No matching note is found (undefined)
  response.status(404).end()
})

// Delete single note by id
app.delete('/rest/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})