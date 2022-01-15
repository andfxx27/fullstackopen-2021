import axios from "axios";
import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const getNotesEffect = async () => {
    console.log("useEffect is being called...");

    try {
      const result = await axios.get("http://localhost:3001/notes");
      console.log("promise is fulfilled");
      const notes = result.data;
      setNotes(notes);
    } catch (error) {
      console.log("promise is rejected");
      console.log(error);
    }
  };

  // Empty array means the effect callback function will only be called once, when the component first rendered
  useEffect(getNotesEffect, []);

  console.log(`Rendering ${notes.length} notes.`);

  return (
    <div>
      <h1>Getting data from server</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
