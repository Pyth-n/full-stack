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
  const part = props.part
  return (
    <>
      <Part part={part[0].name} exercise={part[0].exercises} />
      <Part part={part[1].name} exercise={part[1].exercises} />
      <Part part={part[2].name} exercise={part[2].exercises} />
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

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part={[part1, part2, part3]}/>
      {/* <Total exercises={[exercise1, exercise2, exercise3]} /> */}
    </div>
  );
}

export default App;
