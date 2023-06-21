import React from "react";
import chcocoCalebaut from '../../assets/img/inicio/chocolateBallebaut.png';
import logoCim from '../../assets/icon/logo-cim.png'
import cacao from '../../assets/img/inicio/cacao.png'
import cocina from '../../assets/img/inicio/cocina.png'
import decoraciones from '../../assets/img/inicio/decoraciones.png'
import brownie from '../../assets/img/inicio/browni.png'
import macaronFresa from '../../assets/img/inicio/macaron-fresa.png';
const Home = () => {
    return(
        <div>
            <div className="relative w-full h-full">
                <img className="w-full h-full object-cover top-0 left-0" src={chcocoCalebaut} alt="" />
            </div>

            <div>
                <div className="flex justify-center items-center">
                    <h2>Bienvenido a</h2>
                    <img src={logoCim} alt="" />
                </div>
                <div className="flex justify-center items-center mx-30 text-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                        Cupiditate repudiandae voluptates possimus vero culpa quod libero corrupti rerum! Voluptas nisi, 
                        sequi eaque ipsam aliquam suscipit. <br />
                        Minima sapiente aspernatur quisquam excepturi?
                    </p>
                </div>
                <div className="border border-solid border-[#EA8239] "></div>
                <div>
                    <h3>Lo que necesitas para tus platillos</h3>
                    <div className="grid grid-flow-col items-center justify-evenly">
                        <div>
                            <p className="absolute text-white">Chocolates</p>
                            <img className="" src={cacao} alt="imagenCacao" />
                        </div>
                        <div>
                            <p className="absolute text-white">Cocina</p>
                            <img src={cocina} alt="imagenCacao" />
                        </div>
                        <div>
                            <p className="absolute text-white">Decoraciones</p>
                            <img src={decoraciones} alt="imagenCacao" />
                        </div>
                    </div>
                    <div>
                        <button className="bg-slate-500">Mas Productos</button>
                    </div>

                    <div className="border border-solid border-[#EA8239] "></div>

                    <div>
                        <div>
                            <img src={brownie} alt="" />
                        </div>
                        <div>
                            <h3>Receta de Brownie</h3>
                            <p>Deja a todos encantados con estos deliciosos Brownies  y solo necesitas: {''}</p>
                            <ul>
                                <li>1/2 taza harina para hornear</li>
                                <li>1/8 cucharadita de sal</li>
                                <li>170gr chocolate semiamargo confitier Turin</li>
                                <li>170gr de mantequilla sin sal a temperatura ambiente</li>
                                <li>3 huevos a temperatura ambiente</li>
                            </ul>
                            <button>Receta</button>
                        </div>

                        <div className="border border-solid border-[#EA8239] "></div>

                        <div>
                            <h3>Cursos del Dia</h3>
                            <div>
                                <p>Quieres preparar deliciosos postres pero no sabes como?</p>
                                <p>En CIM contamos con cursos presenciales para que aprendas a preparar delicioso postres para ti y para tus amigos o familiares.</p>
                                <p>No esperes mas y descrubre como puedes participar y aprender deliciosas recetas. </p>  
                            </div>
                            <button>Cursos</button>
                            <div>
                                <img src={macaronFresa} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home