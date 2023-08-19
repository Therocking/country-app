import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './router/RouterApp'

import './contriesPages.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useEffect } from 'react'

export const ContriesApp = () => {

  useEffect(() => {
    const color = localStorage.getItem('theme');
    document.body.dataset.theme = color;
  }, [])
  

  return (
    <BrowserRouter>
      <Provider store={store}>
        <RouterApp/>
      </Provider>
    </BrowserRouter>
  )
}


//* mejoras
/* 
  al escribir mostrar solo los paises de la region selecionada,
  guardar historial de busqueda,
  arreglar problema de la barra de scroll,
  agregar boton al inicio,
  agregar mostrar paises random
*/