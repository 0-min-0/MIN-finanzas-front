import React from 'react'
import { Menu } from './Menu'
import { Botones } from '../UI/Botones'
import { NavLink } from 'react-router-dom'

export const HeaderPaginas = ({ Titulo, Boton }) => {
    return (
        <header className='flex justify-between items-center px-8 py-4'>
            <h1 className='text-lg font-[nunito-sans] font-semibold mb-1'>
                <NavLink to='/'>
                    <span className='text-xl font-[nunito-bold] text-[#605ad1] mr-2'>MIN</span>
                </NavLink> 
                {Titulo}
            </h1>
            <div className='flex gap-8'>
                <Menu />
                {Boton}
            </div>
        </header>
    )
}