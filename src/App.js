import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import FormularioTareas from './components/FormularioTareas'
import ListaTareas from './components/ListaTareas'

const App = () => {

  // Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem('tareas')
                        ? JSON.parse(localStorage.getItem('tareas'))
                        : [];

  // Establecemos el estado de las tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas)

  // Guardando el estado dentro de localStorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    JSON.stringify(tareas);
  }, [tareas])

  // Accedemos a localStorage y comprobamos si mostrasCompletadas es null
  let configMostrarCompletadas = '';
  if (localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas)

  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas])

  console.log(tareas)

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
      />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;