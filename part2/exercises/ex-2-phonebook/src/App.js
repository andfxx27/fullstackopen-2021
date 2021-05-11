import React, { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Felix Andersen', phone: '0812-XXXX-XXXX' },
    { name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewPhonebookEntry = (event) => {
    event.preventDefault()
    
    const person = {
      name: newName,
      phone: newPhoneNumber
    }
    
    // TODO check whether the name already exist in the phonebook
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(person))
    setNewName('')
    setNewPhoneNumber('')
  }

  // Handle filter input
  const handleFilterEntriesByNameOnChange = (event) => {
    setFilter(event.target.value)
  }

  const handleFilterEntriesByNameOnFocus = (event) => {
    setFilter('')
  }
  
  // Handle name input
  const handleNameInputOnChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNameInputOnFocus = (event) => {
    setNewName('')
  }

  // Handle phone number input
  const handlePhoneNumberInputOnChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handlePhoneNumberInputOnFocus = (event) => {
    setNewPhoneNumber('')
  }

  const inputNameAttr = {
    value: newName,
    onChange: handleNameInputOnChange,
    onFocus: handleNameInputOnFocus
  }

  const inputPhoneNumberAttr = {
    value: newPhoneNumber,
    onChange: handlePhoneNumberInputOnChange,
    onFocus: handlePhoneNumberInputOnFocus
  }

  return (
    <div>
      <h1>Phonebook</h1>

      <Filter 
        value={filter} 
        onChange={handleFilterEntriesByNameOnChange}
        onFocus={handleFilterEntriesByNameOnFocus}
        id='inputFilter'
      />

      <Form 
        onSubmit={handleNewPhonebookEntry}
        inputNameAttr={inputNameAttr}
        inputPhoneNumberAttr={inputPhoneNumberAttr}
      />

      <hr />

      <PhonebookEntries 
        filter={filter}
        persons={persons}
      />
    </div>
  )
}

export default App