import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export const Footer = () => {

const columnsStyle = 'text-[#605ad1] text-sm font-semibold'
const textStyle = 'text-[#605ad1] hover:text-[#9589e8] text-sm'

    return (
        <div>
            <div className='flex justify-between font-[nunito-sans] border-b border-[#c9b7ff78] pt-10 pb-6 mx-40'>
                <div className='flex flex-col'>
                    <p className={columnsStyle}>Enlaces rápidos</p>
                    <NavLink
                        to='/sobre-creadora'
                        className={textStyle}
                    >
                        Sobre la creadora
                    </NavLink>
                    <NavLink
                        to='/contacto'
                        className={textStyle}
                    >
                        Contacto
                    </NavLink>
                    <NavLink
                        to='/asistente-ia'
                        className={textStyle}
                    >
                        Asistente IA
                    </NavLink>
                </div>
                <div className='flex flex-col'>
                    <p className={columnsStyle}>Legalidad</p>
                    <NavLink
                        to='/ayuda-soporte'
                        className={textStyle}
                    >
                        Ayuda y soporte
                    </NavLink>
                    <NavLink
                        to='/terminos-condiciones'
                        className={textStyle}
                    >
                        Términos y condiciones
                    </NavLink>
                    <NavLink
                        to='/politicas-privacidad'
                        className={textStyle}
                    >
                        Políticas de privacidad
                    </NavLink>
                </div>
                <div className='flex flex-col'>
                    <p className={columnsStyle}>Links y contacto</p>
                    <a
                        href='https://api.whatsapp.com/send?phone=3195476407'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-[#605ad1] hover:text-[#9589e8] text-sm'
                    >
                        <FaWhatsapp className='text-[#605ad1]' /> Whatsapp
                    </a>
                    <a
                        href='mailto:min.finanzas.personales@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-[#605ad1] hover:text-[#9589e8] text-sm'
                    >
                        <FiMail className='text-[#605ad1]' /> Correo de contacto
                    </a>
                    <a
                        href='https://www.instagram.com/min.finanzas.personales/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center gap-1 text-[#605ad1] hover:text-[#9589e8] text-sm'
                    >
                        <FaInstagram className='text-[#605ad1]' /> Instagram
                    </a>
                </div>
            </div>
            <p className='text-[#605ad1] text-xs py-6 text-center'>© 2025 MIN Finanzas Personales. Todos los derechos reservados.</p>
        </div>
    )
}
