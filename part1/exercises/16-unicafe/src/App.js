import React, { useState } from "react";

import "./App.css";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

const Statistic = (props) => {
  return (
    <tr className="statistic">
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const DisplayStatistics = (props) => {
  if (props.calculateTotalFeedbackHandler(props.cleanStatistics) === 0) {
    return <p>No feedback given.</p>;
  }

  const ui = props.statistics.map((statistic) => {
    return (
      <Statistic
        key={statistic.text}
        text={statistic.text}
        value={statistic.value}
      />
    );
  });

  // Need to customize table view
  return (
    <table>
      <tbody>{ui}</tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const textGood = "Good";
  const textNeutral = "Neutral";
  const textBad = "Bad";
  const textAll = "All";
  const textAverage = "Average";
  const textPositive = "Positive";

  const calculateTotalFeedback = (statistics) => {
    let totalFeedback = 0;
    statistics.forEach((statistic) => {
      totalFeedback += statistic.value;
    });
    return totalFeedback;
  };

  const calculateAverageFeedback = (statistics) => {
    let totalFeedback = 0;
    statistics.forEach((statistic) => {
      if (statistic.text === textGood) {
        totalFeedback += statistic.value * 1;
      } else if (statistic.text === textBad) {
        totalFeedback += statistic.value * -1;
      }
    });

    let averageFeedback = totalFeedback / calculateTotalFeedback(statistics);
    if (isNaN(averageFeedback)) {
      return 0;
    }

    return averageFeedback;
  };

  const calculatePositiveFeedbackPercentage = (statistics) => {
    let totalFeedback = 0;
    statistics.forEach((statistic) => {
      if (statistic.text === textGood) {
        totalFeedback += statistic.value;
      }
    });

    let positiveFeedbackPercentage =
      (totalFeedback / calculateTotalFeedback(statistics)) * 100;
    if (isNaN(positiveFeedbackPercentage)) {
      return 0;
    }

    return `${positiveFeedbackPercentage}%`;
  };

  const handleClickFactory = (text) => {
    switch (text) {
      case textGood:
        return () => setGood(good + 1);
      case textNeutral:
        return () => setNeutral(neutral + 1);
      case textBad:
        return () => setBad(bad + 1);
      default:
        console.log("Type is unknown.");
        break;
    }
  };

  // For calculation
  const cleanStatistics = [
    { text: textGood, value: good },
    { text: textNeutral, value: neutral },
    { text: textBad, value: bad },
  ];

  // For display
  const statistics = [
    { text: textGood, value: good },
    { text: textNeutral, value: neutral },
    { text: textBad, value: bad },
    { text: textAll, value: calculateTotalFeedback(cleanStatistics) },
    { text: textAverage, value: calculateAverageFeedback(cleanStatistics) },
    {
      text: textPositive,
      value: calculatePositiveFeedbackPercentage(cleanStatistics),
    },
  ];

  return (
    <div className="container">
      <h1>Give feedback</h1>
      <div className="btn-container">
        <Button onClick={handleClickFactory(textGood)} text={textGood} />
        <Button onClick={handleClickFactory(textNeutral)} text={textNeutral} />
        <Button onClick={handleClickFactory(textBad)} text={textBad} />
      </div>

      {/* TODO only display statistics once feedback is gathered */}
      <h2>Statistics</h2>
      <DisplayStatistics
        statistics={statistics}
        cleanStatistics={cleanStatistics}
        calculateTotalFeedbackHandler={calculateTotalFeedback}
      />
    </div>
  );
};

export default App;
