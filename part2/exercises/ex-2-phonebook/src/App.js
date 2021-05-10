import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    {'name': 'Felix Andersen'}
  ])
  const [newName, setNewName] = useState("Enter new name...")

  const handleSubmit = (event) => {
    event.preventDefault()
    const person = {
      name: newName
    }

    setPersons(persons.concat(person))
    setNewName("Enter new name...")
  }
  
  const handleNameInputOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNameInputOnFocus = (event) => {
    setNewName("")
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add new phonebook entry</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="inputName">Name</label>
        <input 
          value={newName}
          onChange={handleNameInputOnChange}
          onFocus={handleNameInputOnFocus}
          id="inputName"
        />
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Phonebook entries</h2>
      <ul>
        {persons.map(
          person => <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App
