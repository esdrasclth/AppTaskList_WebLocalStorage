import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas'

const App = () => {

  const [tareas, cambiarTareas] = useState(
    [
      {
        id: 1,
        texto: 'Lavar la ropa',
        completada: false
      },
      {
        id: 2,
        texto: 'Grabar video',
        completada: false
      }
    ]
  )

    console.log(tareas)

  return (
    <div className="contenedor">
      <Header/>
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
    </div>
  );
}

export default App;