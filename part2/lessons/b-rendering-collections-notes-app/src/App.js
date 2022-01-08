import React, { useState } from "react";

import "./App.css";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);

  // To re-render a component, we must use the function returned by useState(...)
  // Therefore, since we assign App's component state to input's value attribute-
  //-it means App component now controll the behavior of the input element
  // An onChange handler is needed to synchronize the typed value with component's state
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addNewNote = (event) => {
    // Prevents default action of submitting form, one of which cause the page to reload
    event.preventDefault();
    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setNotes(notes.concat(newNoteObject));
    setNewNote("");
  };

  const handleNewNoteInputFormChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      {/* Button to toggle whether to show all or only important notes */}
      <button onClick={handleToggleShowAll}>
        Show {showAll ? "important" : "all"}.
      </button>

      {/* Form for adding new note */}
      <form onSubmit={addNewNote}>
        <input
          value={newNote}
          onChange={handleNewNoteInputFormChange}
          placeholder="add new note"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {notesToShow.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </ul>
    </div>
  );
};

export default App;
