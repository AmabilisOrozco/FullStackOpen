import './App.css';


const notes = [
   {
     id: 1,
     content: 'HTML is easy',
     important: true
   },
   {
     id: 2,
     content: 'Browser can execute only JavaScript',
     important: false
   },
   {
     id: 3,
     content: 'GET and POST are the most important methods of HTTP protocol',
     important: true
   }
]

const Note = ({id, content}) => {
   return (
   <li>
   <p>{id}</p>
   <small>
      <p>{content}</p>
   </small>
   </li>
   )
}

export default function App() {
   return (
      <ul>
         {notes.map((note) => (
         <Note {...note} />
      ))}
      </ul>
   ) //24:15
}
