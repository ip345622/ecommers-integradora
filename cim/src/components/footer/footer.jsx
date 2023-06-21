import React from "react";
import Inicio from '../../page/start'

const Footer = () => {
    return(
        <section>
            <div className="flex justify-evenly">
                <div>
                <p>MENU RAPIDO</p>
                <a href="#" target="_BLANK" className="block">Blog</a>
                <a href="#" target="_BLANK" className="block">Contactanos</a>
                <a href="#" target="_BLANK"className="block">Cursos de reposteria</a>
                <a href="#" target="_BLANK"className="block">Galeria</a>
                </div>
                <div>
                    <a href="#" className="block">Materias Primas</a>
                    <a href="#" className="block">Nosotros</a>
                    <a href="#" className="block">Productos</a>
                    <a href="#" className="block">Recetas</a>
                </div>

                {/* conocenos */}
                <div>
                    <p>Conocenos</p>
                    <a href= "/" className="block">Inicio</a>
                    <a href= "nosotros" className="block">Nosotros</a>
                    <a href= "productos" className="block">Productos</a>
                    <a href= "recetas" className="block">Inicio</a>

                </div>
                
            </div>
        </section>
    )
}

export default Footer