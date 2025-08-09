import React from 'react'
import PrincipalImagen from '../assets/images/imagen-principal.png'
import { Header } from '../Components/Header'
import { ContenidoPrincipal } from '../Layouts/ContenidoPrincipal'
import { Footer } from '../Components/Footer'

export const Principal = () => {
    return (
        <div>
            <Header />
            <ContenidoPrincipal />
            <Footer />
        </div>
    )
}

