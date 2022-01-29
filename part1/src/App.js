const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

function App() {
  console.log('hello from component')
  return (
    <>
      <Hello name="dave" age={2050-2000}/>
    </>
  );
}

export default App;
