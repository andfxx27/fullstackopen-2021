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
    person => <li key={person.name}>{person.name} {person.phone}</li>
  )

  if (props.filter !== "") {
    const filteredPersons = props.persons.filter(
      person => person.name.includes(props.filter)
    )
    phonebookEntries = filteredPersons.map(
      person => <li key={person.name}>{person.name} {person.phone}</li>
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