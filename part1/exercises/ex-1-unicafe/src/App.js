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
const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.count}</td>
    </tr>
  )
}
// Component for bundling the single statistic (Display component) part
const Statistics = (props) => {
  // Only display detailed statistics once feedback has been gathered
  if (calculateTotalFeedback(props.feedback) === 0) {
    return (
      <p className="section-content">No feedback given</p>
    )
  } 

  return (
    <div>
      <table>
        <tbody className="section-content">
          <Statistic text="Good" count={props.feedback.good} />
          <Statistic text="Neutral" count={props.feedback.neutral} />
          <Statistic text="Bad" count={props.feedback.bad} />
          <Statistic text="All" count={calculateTotalFeedback(props.feedback)} />
          <Statistic text="Average" count={calculateAverageFeedback(props.feedback)} />
          <Statistic text="Positive" count={calculatePositiveFeedbackPercentage(props.feedback).toString() + "%"} /> 
        </tbody>
      </table>
    </div>
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
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App;
