import React from 'react'
import PrincipalImagen from '../assets/images/imagen-principal.png'
import { Header } from '../Components/Header'
import { ContenidoPrincipal } from '../Layouts/ContenidoPrincipal'

export const Principal = () => {
    return (
        <div>
            <Header />
            <ContenidoPrincipal />
        </div>
    )
}

