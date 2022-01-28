
function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises}
      </p>
      <h1>{course}</h1>
      <p>
        {part2} {exercise2}
      </p>
      <h1>{course}</h1>
      <p>
        {part3} {exercise3}
      </p>
    </div>
  );
}

export default App;
