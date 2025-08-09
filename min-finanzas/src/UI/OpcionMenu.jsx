import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa'

export const OpcionMenu = ({ Nombre, Ruta }) => {
    return (
        <li>
            <NavLink
                to={Ruta}
                className={({ isActive }) =>
                    `flex items-center gap-2 font-[nunito-sans] font-semibold px-2.5 py-1.5 rounded-xl
                    transition-all duration-300 ease-in-out
                    ${isActive ? 'text-[#7a71dd]' : 'text-gray-700 hover:text-[#7a71dd]'}`
                }
            >
                {({ isActive }) => (
                    <>
                        {/* Círculo solo si está activo o en hover */}
                        <span
                            className={`transition-all duration-300 ease-in-out ${
                                isActive
                                    ? 'opacity-100 translate-x-0 text-[#7a71dd]'
                                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#7a71dd]'
                            }`}
                        >
                            <FaCircle size={8} />
                        </span>
                        {Nombre}
                    </>
                )}
            </NavLink>
        </li>
    )
}
