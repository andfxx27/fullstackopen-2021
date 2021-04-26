import './App.css';

// Since props is passed to Hello component as parameter...
// ...we can directly destructure it inside the parentheses and...
// ...immediately assign it to a variable
const Hello = ({name, age}) => {
  // It is possible and easy to place function inside function in JavaScript
  // Helper function to guess the year of birth
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div className="App">
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App;