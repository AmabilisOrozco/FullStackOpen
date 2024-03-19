import './App.css';
import Mensaje from './Mensajes'

const Description = () => {
   return <p>Esta es la app del curso fullstack bootcamp</p>
}


const App = () => {

  return (
    <div className="App">
      <Mensaje color= 'red' message='Estamos trabajando' />
      <Mensaje color= 'blue' message='En un curso' />
      <Mensaje color= 'green' message='De React' />
      <Description />
    </div>
  ) 
}

export default App;
