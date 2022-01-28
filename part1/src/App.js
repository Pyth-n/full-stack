const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
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
