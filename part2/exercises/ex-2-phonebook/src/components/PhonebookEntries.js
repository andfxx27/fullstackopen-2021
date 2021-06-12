import React from 'react'
import '../App.css'

/**
 * PhonebookEntries component
 * 
 * Component for displaying phonebook entries (name and phone no.)
 * @param {*} props 
 * @returns JSX
 */
const PhonebookEntries = (props) => {
  let phonebookEntries = props.persons.map(
    person => {
      return (
        <li key={person.name} className='note'>
          <span>{person.name}</span>
          <span className='margin-md'>{person.phone}</span>
          <button 
            className='delete-btn' 
            onClick={() => props.onDelete(person._id)}>
            Delete
          </button>
        </li>  
      )
    } 
  )

  if (props.filter !== "") {
    const filteredPersons = props.persons.filter(
      person => person.name.toLowerCase().includes(props.filter.toLowerCase())
    )
    phonebookEntries = filteredPersons.map(
      person => {
        return (
          <li key={person.name} className='note'>
            <span>{person.name}</span>
            <span className='margin-md'>{person.phone}</span>
            <button 
              className='delete-btn' 
              onClick={() => props.onDelete(person.id)}>Delete
            </button>
          </li>  
        )
      } 
    )
  }

  return (
    <>
      <h2>Phonebook Entries</h2>
      <ul>
        {phonebookEntries}
      </ul>
    </>
  )
}

export default PhonebookEntries