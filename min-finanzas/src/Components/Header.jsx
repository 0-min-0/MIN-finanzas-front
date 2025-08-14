import React from 'react'
import { Menu } from './Menu'
import { Botones } from '../UI/Botones'

export const Header = () => {
  return (
    <header className='flex justify-between items-center px-8 py-4'>
      <h1 className='text-lg font-[nunito-sans] font-semibold mb-1'>
        <span className='text-xl font-[nunito-bold] text-[#605ad1] mr-2'>MIN</span> Gestión de finanzas personales
      </h1>
      <div className=''>
        <Menu />
      </div>
      <div className='flex gap-2'>
        <Botones
          Nombre='Iniciar sesión'
          Ruta='/iniciar-sesion'
          Clase='text-white py-1.5'
        />
        <Botones
          Nombre='Registrarse'
          Ruta='/registrarse'
          Clase='bg-white text-[#7a71dd] border-2 border-[#7a71dd]'
          Hover='hover:bg-[#7a71dd] hover:text-white'
        />
      </div>
    </header>
  )
}
