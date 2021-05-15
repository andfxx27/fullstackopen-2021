import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import './App.css'
import Filter from './components/Filter'
import Form from './components/Form'
import PhonebookEntries from './components/PhonebookEntries'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const handleNewPhonebookEntry = (event) => {
    event.preventDefault()
    
    const person = {
      name: newName,
      phone: newPhoneNumber
    }
    
    if (persons.find(person => person.name === newName)) {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        let existingPerson = persons.find(person => person.name === newName)
        personService
          .updatePhoneNumber(existingPerson.id, {...existingPerson, phone: person.phone})
          .then(response => {
            console.log(response)
            setPersons(persons.map(
              person => {
                if (person.id === response.data.id) {
                  return response.data
                }

                return person
              }
            ))

            setMessage(`Success update phone number for entry ${response.data.name}!`)
            setMessageType('success')
            setTimeout(() => {
              setMessage(null)
              setMessageType(null)
            }, 3000)
          })
          .catch(error => {
            console.log(error)
            setPersons(persons.filter(p => p.name !== person.name))
            setMessage(`${existingPerson.name} has already been removed from the server!`)
            setMessageType('error')
            setTimeout(() => {
              setMessage(null)
              setMessageType(null)
            }, 3000)
          })
      }

      return
    }

    personService
      .create(person)
      .then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewPhoneNumber('')
        setMessage(`Success add new phonebook entry!`)
        setMessageType('success')
        setTimeout(() => {
          setMessage(null)
          setMessageType(null)
        }, 3000)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleDeletePhonebookEntry = id => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      console.log(`The phonebook entry with id ${id} will be deleted`)
      personService
        .deleteByID(id)
        .then(response => {
          setPersons(persons.filter(
            person => person.id !== id
          ))
        })
        .catch(error => {
          console.log(error)
        })
    }
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

  // useEffect for fetching data from the server; called after first render is done
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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

      <Notification message={message} type={messageType} />

      <hr />

      <PhonebookEntries 
        filter={filter}
        persons={persons}
        onDelete={handleDeletePhonebookEntry}
      />
    </div>
  )
}

export default App