import React, { useState } from 'react'
import './App.css';

// Additional component
// Button component for giving feedback
const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">{props.btnText}</button>
  )
}
// Component for rendering section title such as "Give Feedback" or "Statistics"
const SectionTitle = (props) => {
  return (
    <h2 className="section-title">{props.sectionTitle}</h2>
  )
}
// Component for rendering the feedback statistics
const Display = (props) => {
  return (
    <p className="section-content">{props.text} {props.count}</p>
  )
}


// Helper function for process the feedback
// Function to calculate total feedback (good, neutral, and bad combined)
const calculateTotalFeedback = (feedback) => {
  return feedback.good + feedback.neutral + feedback.bad
}
// Function to calculate the average feedback
const calculateAverageFeedback = (feedback) => {
  // Check whether feedback has count
  if (calculateTotalFeedback(feedback) <= 0) {
    return 0
  }

  return (feedback.good * 1 + feedback.bad * -1) / calculateTotalFeedback(feedback)
}
// Function to calculate the percentage of positive feedback
const calculatePositiveFeedbackPercentage = (feedback) => {
  // Check whether feedback has count
  if (calculateTotalFeedback(feedback) <= 0) {
    return 0
  }

  return (feedback.good/ calculateTotalFeedback(feedback)) * 100
}


// Root component
const App = () => {
  // Initialize component state and state modifier
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  // Event handler for each type of feedback
  const giveGoodFeedback = () => {
    setFeedback({
      ...feedback,
      good: feedback.good + 1
    })
  }
  const giveNeutralFeedback = () => {
    setFeedback({
      ...feedback,
      neutral: feedback.neutral + 1
    })
  }
  const giveBadFeedback = () => {
    setFeedback({
      ...feedback,
      bad: feedback.bad + 1
    })
  }
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    })
  }

  return (
    <div className="container">
      <SectionTitle sectionTitle="Give Feedback" />
      <Button handleClick={giveGoodFeedback} btnText="Good" />
      <Button handleClick={giveNeutralFeedback} btnText="Neutral" />
      <Button handleClick={giveBadFeedback} btnText="Bad" />
      <Button handleClick={resetFeedback} btnText="Reset" />

      <SectionTitle sectionTitle="Statistics" />
      <Display text="Good" count={feedback.good} />
      <Display text="Neutral" count={feedback.neutral} />
      <Display text="Bad" count={feedback.bad} />
      <Display text="All" count={calculateTotalFeedback(feedback)} />
      <Display text="Average" count={calculateAverageFeedback(feedback)} />
      {/** Percentage of positive feedback */}
      <Display text="Positive" count={calculatePositiveFeedbackPercentage(feedback).toString() + "%"} /> 
    </div>
  )
}

export default App;
