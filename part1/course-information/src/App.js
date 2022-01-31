const Header = ({ courses }) => {
  console.log(courses)
  return (
    <>
        {courses.map(x => 
          <h1>{x.toString()}</h1>
        )}
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

const Total = ({ parts }) => {
  let total = parts.reduce((t, c) => t + c.exercises, 0)

  return (
    <>
      <strong>
        <p>
          Total exercises: {total}
        </p>
      </strong>
    </>
  )
}

function App() {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

const Course = ({ course }) => {
  let names = course.map(x => x.name)
  let parts = course.map(x => x.parts)
  
  return (
    <div>
      {<Header courses={names}/>
      /*<Content part={course.parts}/>
      <Total parts={course.parts} /> */}
    </div>
  );
}

export default App;
