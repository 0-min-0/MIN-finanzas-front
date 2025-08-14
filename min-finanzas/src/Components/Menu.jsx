import React from 'react'
import { OpcionMenu } from '../UI/OpcionMenu'

export const Menu = () => {
    return (
        <div>
            <ul className='flex items-center gap-3'>
                <OpcionMenu Nombre='Principal' Ruta='/' />
                <OpcionMenu Nombre='Sobre la creadora' Ruta='/ruta3' />
                <OpcionMenu Nombre='Contacto' Ruta='/ruta4' />
                <OpcionMenu Nombre='Asistente IA' Ruta='/ruta5' />
            </ul>
        </div>
    )
}
