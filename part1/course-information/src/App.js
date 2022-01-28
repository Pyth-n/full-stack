const Header = () => {
  const course = 'Half Stack application development'

  return (
    <>
      <h1>
        {course}
      </h1>
    </>
  )
}

const Content = () => {
  return (
    <>
    </>
  )
}

const Total = () => {
  return (
    <>
    </>
  )
}

function App() {
  const part1 = 'Fundamentals of React'
  const exercises = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header />
      <p>
        {part1} {exercises}
      </p>
      <Header />
      <p>
        {part2} {exercise2}
      </p>
      <Header />
      <p>
        {part3} {exercise3}
      </p>
    </div>
  );
}

export default App;
