import React, { useState } from 'react'
import './App.css'

// Import components ...
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'enter new note...'
  )
  const [showAll, setShowAll] = useState(true) // Initially, all notes are shown

  // Array of react elements, with 'li' as its base element
  // a tag inside an array (regardless of array count) must have 'key' attribute
  // Note component below is inside an array (generate by .map), therefore 'key' attribute is mandatory
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const notesListItem = notesToShow.map(note => <Note key={note.id} note={note} />)

  // Function called when submitting the form
  const addNote = (event) => {
    // Prevent default action upon submitting form to happen (page reload)
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('enter new note...')
  }

  // Function called when input element is changed
  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  // Function called when toggling show all/ important notes button
  const handleShowNotes = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='App'>
      <h1>Notes</h1>
      <button onClick={handleShowNotes}>
        Show {showAll ? 'important' : 'all'} notes
      </button>
      <ul>
        {notesListItem}
      </ul>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleInputChange}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default App