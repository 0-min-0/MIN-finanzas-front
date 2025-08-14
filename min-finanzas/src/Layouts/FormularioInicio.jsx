import React from 'react'
import inicioSesion from '../assets/images/iniciar-sesion.png'
import { Input } from '../UI/Input'
import { Botones } from '../UI/Botones'
import { NavLink } from 'react-router-dom'

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
            <div className='w-[32%] shadow-[#9689e865] shadow-md rounded-xl py-6 px-10 mr-25'>
                <h2 className='text-center mb-3 text-lg font-[nunito-bold] text-[#6961c2]'>Iniciar Sesión</h2>
                <form action='' className='w-full flex flex-col items-center gap-1.5'>
                    <Input
                        Label='Correo electrónico o número de teléfono'
                        Tipo={'email' || 'tel'}
                        Id='loginEmail'
                        Nombre='email'
                        Placeholder='Ingresa tu email'
                        Estilo=''
                    />
                    <Input
                        Label='Contraseña'
                        Tipo='password'
                        Id='contraseña'
                        Nombre='contraseña'
                        Placeholder='Ingresa tu contraseña'
                        Estilo=''
                    />
                    <span className='mt-2 text-sm text-[#6961c2]'>
                        ¿Has olvidado tu contraseña?
                        <NavLink to='/recuperar-contraseña' className='mt-2 ml-1 text-sm text-[#6961c2] hover:underline'>
                            Recupérala aquí
                        </NavLink>
                    </span>
                    <div className='flex gap-2 mt-4'>
                        <Botones
                            Nombre='Iniciar Sesión'
                            Ruta='/dashboard'
                            Clase='py-1.5 text-white'
                            Tipo='submit'
                        />
                        <Botones
                            Nombre='Necesito ayuda'
                            Ruta='/dashboard'
                            Clase='bg-white text-[#7a71dd] border-2 border-[#7a71dd]'
                            Hover='hover:bg-[#7a71dd] hover:text-white'
                            Tipo='submit'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}