import React from 'react'
import { HeaderPaginas } from '../Components/HeaderPaginas'
import { Botones } from '../UI/Botones'

export const Registro = () => {
    return (
        <div>
            <HeaderPaginas
                Titulo="Registrarse"
                Boton={
                    <Botones
                        Nombre='Iniciar sesión'
                        Ruta='/iniciar-sesion'
                        Clase='bg-white text-[#7a71dd] border-2 border-[#7a71dd]'
                        Hover='hover:bg-[#7a71dd] hover:text-white'
                    />
                }
            />
        </div>
    )
}
