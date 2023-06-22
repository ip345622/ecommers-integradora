import React from "react";
import facebook from '../../assets/icon/facebook.svg'
import instalgram from '../../assets/icon/instalgram.svg'
import pinteres from '../../assets/icon/pinteres.svg'

const Footer = () => {
    return(
        <section className="border-t border-[#E98139]">
            <div className="flex justify-evenly">
                <div className="mt-5">
                <p>MENU RAPIDO</p>
                <div className="text-[#E98139]">
                <a href="#" target="_BLANK" className="block">Blog</a>
                <a href="#" target="_BLANK" className="block">Contactanos</a>
                <a href="#" target="_BLANK"className="block">Cursos de reposteria</a>
                <a href="#" target="_BLANK"className="block">Galeria</a>
                </div>
                </div>
                <div className="text-[#E98139] mt-10">
                    <a href="#" className="block">Materias Primas</a>
                    <a href="#" className="block">Nosotros</a>
                    <a href="#" className="block">Productos</a>
                    <a href="#" className="block">Recetas</a>
                </div>

                {/* conocenos */}
                <div className="mt-5">
                    <p>CONOCENOS</p>
                    <div className="text-[#E98139]">
                    <a href= "/" className="block">Inicio</a>
                    <a href= "nosotros" className="block">Nosotros</a>
                    <a href= "productos" className="block">Productos</a>
                    <a href= "recetas" className="block">Inicio</a>
                    </div>
                </div>
                {/* siguenos en */}
                <div className="mt-10">
                    <p>SIGUENOS EN</p>
                    <div className="flex">
                        <img src={facebook} alt="facebook" />                    
                        <img src={instalgram} alt="instalgram" />                    
                        <img src={pinteres} alt="pinteres" />     
                    </div>                   
                </div>                
            </div>
            {/* derechos reservados */}
            <div className="bg-[#000] text-[#fff] text-center">
                <p>COPYRIGHT &copy; 2023 CIM</p>
                <span>AGENCIA DE MARKETING DIGITAL</span>
            </div>
        </section>
    )
}

export default Footer