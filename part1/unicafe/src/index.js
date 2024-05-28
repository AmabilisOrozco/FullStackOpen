import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Component for individual buttons
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// Component to display statistics
const Statistics = ({ good, neutral, bad }) => {
   const total = good + neutral + bad || 0

   if (total === 0) {
      return <p>No feedback given</p>
   }

   const averages = (good + bad * -1) / total || 0
   const positive = (good / total ) * 100 || 0



   return (
     <div>

      <div>
         <div>good {good}</div>
         <div>neutral {neutral}</div>
         <div>bad {bad}</div>
      </div>
      <div>
         <div>averages {averages}</div>
         <div>positive {positive}%</div>
      </div>
     </div>
   );
}

const App = () => {
  // State hooks for each feedback type
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handler function for button clicks
  const handleButtonClick = (type) => () => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleButtonClick('good')} text='Good' />
      <Button onClick={handleButtonClick('neutral')} text='Neutral' />
      <Button onClick={handleButtonClick('bad')} text='Bad' />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
