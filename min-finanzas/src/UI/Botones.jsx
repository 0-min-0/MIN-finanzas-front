import React from 'react'
import { NavLink } from 'react-router-dom'

export const Botones = ({ Nombre, Ruta, Clase, Tipo = 'button', Hover = 'hover:bg-[#6961c2]' }) => {

    const Base = `font-[nunito-sans] font-semibold text-sm bg-[#7a71dd] px-4 py-1 rounded-xl transition-all 
                duration-300 ${Hover} cursor-pointer`

    return (
        <div>
            <NavLink to={Ruta}>
                <button className={`${Base} ${Clase}`} type={Tipo}>
                    {Nombre}
                </button>
            </NavLink>
        </div>
    )
}
