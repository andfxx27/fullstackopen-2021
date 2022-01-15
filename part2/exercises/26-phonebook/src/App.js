import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import Search from "./components/Search";
import "./App.css";
import Phonebook from "./components/Phonebook";

// TODO extract into its own components: search filter, phonebook form, phonebook list
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(async () => {
    const result = await axios.get("http://localhost:3001/persons");
    const persons = result.data;
    setPersons(persons);
  }, []);

  const resetComponentState = () => {
    setNewName("");
    setNewPhone("");
  };

  const handleAddNewPhoneInformation = (event) => {
    event.preventDefault();

    // Validate that name & phone must not be empty
    if (newName === "" || newPhone === "") {
      alert(`${newName} or ${newPhone} cannot be empty.`);
      resetComponentState();
      return;
    }

    // Validate and prohibit same name as input
    let alreadyExists = false;
    persons.forEach((person) => {
      if (person.name === newName || person.phone === newPhone) {
        alreadyExists = true;
      }
    });
    if (alreadyExists) {
      alert(`${newName} or ${newPhone} is already in the phonebook.`);
      resetComponentState();
      return;
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }));
    resetComponentState();
  };

  const handleNameInputOnChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneInputOnChange = (event) => {
    setNewPhone(event.target.value);
  };

  const handleSearchInputOnChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter out the phonebook information here before rendering the result
  const phonebookInformationToShow =
    searchQuery === ""
      ? persons
      : persons.filter((person) => {
          const personNameLowercase = person.name.toLowerCase();
          const personPhoneLowercase = person.phone.toLowerCase();
          const searchQueryLowercase = searchQuery.toLowerCase();

          return (
            personNameLowercase.includes(searchQueryLowercase) ||
            personPhoneLowercase.includes(searchQueryLowercase)
          );
        });

  return (
    <div>
      <h1>Phonebook</h1>
      {/* Input for filtering the phonebook information */}
      <Search onChange={handleSearchInputOnChange} />

      {/* Form for adding new phonebook information */}
      <Form
        name={newName}
        nameOnChangeHandler={handleNameInputOnChange}
        phone={newPhone}
        phoneOnChangeHandler={handlePhoneInputOnChange}
        onSubmit={handleAddNewPhoneInformation}
      />

      {/* Test material ui table */}
      <h2>Numbers list</h2>
      <Phonebook phonebookInformationToShow={phonebookInformationToShow} />
    </div>
  );
};

export default App;
