import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import { Principal } from './Pages/Principal'
import { Routes, Route } from 'react-router-dom'
import { InicioSesion } from './Pages/InicioSesion'

function App() {
  return (
    <div className='h-screen'>
      <Routes>
        <Route path='/' element={<Principal />} />
        <Route path='/iniciar-sesion' element={<InicioSesion />} />
      </Routes>
    </div>
  )
}

export default App
