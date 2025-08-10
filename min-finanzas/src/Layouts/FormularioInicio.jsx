import React from 'react'
import inicioSesion from '../assets/images/iniciar-sesion.png'

export const FormularioInicio = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <img
                    src={inicioSesion}
                    alt='Iniciar Sesión'
                    className='w-190 h-auto'
                />
            </div>
            <div className='bg-[#fbfafe] rounded-xl p-8'>
                <h2>Iniciar Sesión</h2>
                <form action=''>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}