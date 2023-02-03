import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  

  return (
   
      <div>
       <NavBar/>
       <ItemListContainer greeting = "Bienvenido a mi ecommerce"/>
    </div>
  )
}

export default App
