import React from 'react'
import { motion } from 'framer-motion'
import imagenPrincipal from '../assets/images/imagen-principal.png'
import { Botones } from '../UI/Botones'

export const ContenidoPrincipal = () => {
    return (
        <div className='flex justify-between items-center'>
            {/* Texto con animación */}
            <motion.div
                className='pl-22'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
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
                <p className='font-[nunito-sans] mt-2 text-xs text-[#7a71dd]'>
                    Disponible solo para dispositivos Android.
                </p>
            </motion.div>

            {/* Imagen con animación */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
                <img
                    src={imagenPrincipal}
                    alt='Imagen Principal'
                    className='w-170 h-auto'
                />
            </motion.div>
        </div>
    )
}
