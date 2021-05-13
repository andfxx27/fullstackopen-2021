import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('') 
  const [showAll, setShowAll] = useState(true)

  // Effect run after every completed render, with few modification (fire after certain values changed, etc.)
  const effect = () => {
    console.log('useEffect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise resolved')
        setNotes(response.data)
      })
  }

  // Second parameter specify how often the effect run/ called
  useEffect(effect, [])

  console.log('render', notes.length, 'notes')

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

/**
 * Execution order
 * 
 * render 0 notes -> Component is being rendered for the first time, data is not fetched yet
 * useEffect -> 'effect' callback is called
 * promise resolved -> data is fetched (currently in response), notes state is being set with the response
 * render 3 notes -> since state is updated, component is rerendered and data is fetched
 */

export default App
