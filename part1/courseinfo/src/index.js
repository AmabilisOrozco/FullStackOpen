import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
   const {title} = props
   console.log(props)

   return <h1>{title}</h1>
}

const Part = (props) => {
   const { part } = props;
   return (
     <p>
       {part.title} {part.exercises}
     </p>
   )
}

const Content = ({ parts }) => (
   <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
   </div>
/**
 * <div>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
   </div>
 */
)

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises: {total}</p>;
}

const App = () => {
   const course = {
     name: 'Half Stack application development',
     parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
     ]
   } 

  return (
   <div>
     <Header course={course} />
     <Content parts={course.parts} />
     <Total parts={course.parts} />
   </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
