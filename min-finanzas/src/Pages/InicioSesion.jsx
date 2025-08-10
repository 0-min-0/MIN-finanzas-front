import React from 'react'
import { HeaderPaginas } from '../Components/HeaderPaginas'
import { Botones } from '../UI/Botones'
import { FormularioInicio } from '../Layouts/FormularioInicio'

export const InicioSesion = () => {
  return (
    <div>
      <HeaderPaginas
        Titulo="Iniciar Sesión"
        Boton={
          <Botones
            Nombre='Registrarse'
            Ruta='/registrarse'
            Clase='bg-white text-[#7a71dd] border-2 border-[#7a71dd] hover:bg-[#7a71dd] hover:text-white'
          />
        }
      />
      <FormularioInicio />
    </div>
  )
}

