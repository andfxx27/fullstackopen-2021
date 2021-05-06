import React, { useState } from 'react'
import './App.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  // Initial state is zero-filled array of integer with length equals anecdotes' length
  const [votes, setVote] = useState((new Array(anecdotes.length).fill(0)))

  const getNextAnecdote = () => {
    let isValid = false
    let index = -1
    while (!isValid) {
      // Keep generating random number until it is a new index (not currently selected anecdote)
      index = Math.floor(Math.random() * anecdotes.length)
      if (index <= anecdotes.length - 1 && index !== selected) {
        isValid = true
      }
    }

    setSelected(index)
  }

  const vote = () => {
    // Create array copy of old state
    const newVotes = [...votes]

    // Add vote for currently selected anecdote
    newVotes[selected]++

    // Update the state and re-render the view
    setVote(newVotes)
  }

  // Return anecdote's index with most votes based on current votes state
  const getAnecdoteIndexWithMostVotes = () => {
    let anecdoteIndexWithMostVotes = 0
    let max = 0
    votes.forEach((vote, index) => {
      if (vote > max) {
        max = vote
        anecdoteIndexWithMostVotes = index
      }
    })

    return anecdoteIndexWithMostVotes
  }

  return (
    <div className="container">
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[getAnecdoteIndexWithMostVotes()]}</p>
      <p>has {votes[getAnecdoteIndexWithMostVotes()]} votes</p>
    </div>
  )
}

export default App;
