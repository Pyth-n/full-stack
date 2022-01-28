const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part[0]} exercise={props.exercises[0]} />
      <Part part={props.part[1]} exercise={props.exercises[1]} />
      <Part part={props.part[2]} exercise={props.exercises[2]} />
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part}: {props.exercise}
      </p>
    </>
  )
}

const Total = (props) => {
  let total = 0
  for (let i = 0; i < props.exercises.length; i++) {
    total += props.exercises[i]
  }
  return (
    <>
      <p>
        Total exercises: {total}
      </p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]} exercises={[exercise1, exercise2, exercise3]} />
      <Total exercises={[exercise1, exercise2, exercise3]} />
    </div>
  );
}

export default App;
