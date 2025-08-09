import React from 'react'
import imagenPrincipal from '../assets/images/imagen-principal.png'
import { Botones } from '../UI/Botones'

export const ContenidoPrincipal = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='pl-22'>
                <h1 className='text-xl mb-2 font-[nunito-sans] text-[#7a71dd] font-semibold'>
                    ¡Bienvenido a MIN!
                </h1>
                <h2 className='text-4xl font-[nunito-bold]'>
                    Tu plataforma de <br /> gestión de finanzas personales
                </h2>
                <h3 className='font-[nunito-sans] mt-6 mb-4'>
                    En MIN puedes llevar el control de tus gastos <br />
                    e ingresos, estableciendo presupuestos y recibiendo informes <br />
                    semanales y mensuales de tus movimientos financieros.
                    <br /> 
                    MIN cuenta con una aplicación movil para que puedas gestionar <br />
                    tus finanzas desde cualquier lugar, brindando así a sus usuarios más <br />
                    accesibilidad y comodidad en el uso de la plataforma.
                </h3>
                <Botones
                    Nombre='Descargar aplicación móvil'
                    Ruta='/descargar-app'
                    Clase='bg-[#7a71dd] text-white py-1.5 px-4 rounded'
                />
                <p className='font-[nunito-sans] mt-2 text-xs text-[#7a71dd]'>Disponible solo para dispositivos Android.</p>
            </div>
            <div>
                <img
                    src={imagenPrincipal}
                    alt='Imagen Principal'
                    className='w-170 h-auto'
                />
            </div>
        </div>
    )
}
