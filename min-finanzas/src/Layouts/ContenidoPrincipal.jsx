import React from 'react'
import imagenPrincipal from '../assets/images/imagen-principal.png'

export const ContenidoPrincipal = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='pl-25'>
                <h1 className='text-xl mb-4 font-[nunito-sans] text-[#7a71dd] font-semibold'>
                    ¡Bienvenido a MIN!
                </h1>
                <h2 className='text-4xl font-[nunito-bold]'>
                    Tu plataforma de <br /> gestión de finanzas <br /> personales
                </h2>
                <h3 className='font-[nunito-sans] mt-6'>
                    En MIN puedes llevar el control de tus gastos <br /> 
                    e ingresos, estableciendo presupuestos y recibiendo <br /> 
                    informes semanales y mensuales de tus movimientos <br /> 
                    financieros.
                </h3>
            </div>
            <div>
                <img 
                src={imagenPrincipal} 
                alt='Imagen Principal' 
                className='w-180 h-auto'
                />
            </div>
        </div>
    )
}
