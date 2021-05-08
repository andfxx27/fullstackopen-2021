import React from 'react'
import './App.css'

// Import components ...
import Note from './components/Note'

const App = ({ notes }) => {
  // Array of react elements, with 'li' as its base element
  // a tag inside an array (regardless of array count) must have 'key' attribute
  // Note component below is inside an array (generate by .map), therefore 'key' attribute is mandatory
  const notesListItem = notes.map(note => <Note key={note.id} note={note} />)

  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notesListItem}
      </ul>
    </div>
  )
}

export default App