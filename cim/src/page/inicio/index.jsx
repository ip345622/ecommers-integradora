import React from "react";
import chcocoCalebaut from '../../assets/img/inicio/chocolateBallebaut.png';
import logoCim from '../../assets/icon/logo-cim.png'
import cacao from '../../assets/img/inicio/cacao.png'
import cocina from '../../assets/img/inicio/cocina.png'
import decoraciones from '../../assets/img/inicio/decoraciones.png'
import brownie from '../../assets/img/inicio/browni.png'
import logoTurin from '../../assets/img/inicio/marcas/logoTurin.png'
import logoChantilly from '../../assets/img/inicio/marcas/Chantilly.png'
import logoCallebaut from '../../assets/img/inicio/marcas/Callebaut.png'
import logoWilton from '../../assets/img/inicio/marcas/wilton.png'
import logoPuratos from '../../assets/img/inicio/marcas/puratos.png'
import logoGlorya from '../../assets/img/inicio/marcas/glorya.png'
import logoMetaltex from '../../assets/img/inicio/marcas/Metaltex.png'
import productoAzucarGlas from '../../assets/img/inicio/productos/azucarGlas.jpg'
import productoCremaLyncott from '../../assets/img/inicio/productos/cremaLyncott.jpg'
import productoCremaRich from '../../assets/img/inicio/productos/cremaRich.jpg'
import productoManteGloria from '../../assets/img/inicio/productos/manteGloria.jpg'
import productoChocoCallebaut from '../../assets/img/inicio/productos/chocolateCallebaut.png'
import productoDuyas from '../../assets/img/inicio/productos/duyas.png'
const Home = () => {
    return(
        <div>
            <div className="relative w-full h-full">
                <img className="w-full h-full object-cover top-0 left-0" src={chcocoCalebaut} alt="" />
            </div>

            <div>
                <div className="mb-10 mt-10">
                    <div className="flex justify-center items-center">
                        <h2 className="text-5xl">Bienvenido a</h2>
                        <img src={logoCim} alt="" />
                    </div>
                    <div className="flex justify-center items-center mx-30 text-center">
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                            Cupiditate repudiandae voluptates possimus vero culpa quod libero corrupti rerum! Voluptas nisi, 
                            sequi eaque ipsam aliquam suscipit. <br />
                            Minima sapiente aspernatur quisquam excepturi?
                        </p>
                    </div>
                </div>
                <div className="border border-solid border-[#EA8239] mx-96 my-20"></div>
                <div>
                    <h3 className="text-[#EA8239] mb-10 ml-28 text-2xl font-semibold">Lo que necesitas para tus platillos</h3>
                    <div className="grid grid-flow-col items-center justify-evenly">

                        <div className="flex items-center justify-center">
                            <p className="absolute text-white text-3xl">Chocolates</p>
                            <img className="" src={cacao} alt="imagenCacao" />
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="absolute text-white text-3xl">Cocina</p>
                            <img src={cocina} alt="imagenCacao" />
                        </div>
                        <div className="flex items-center justify-center">
                            <p className="absolute text-white text-3xl">Decoraciones</p>
                            <img  src={decoraciones} alt="imagenCacao" />
                        </div>
                    </div>
                    <div className="flex justify-center my-10">
                        <button className="bg-[#EA8239] p-3 rounded-md text-white font-medium text-lg">Mas Productos</button>
                    </div>

                    <div className="border border-solid border-[#EA8239] mx-96 my-20"></div>

                    <div>
                        <div className="flex justify-center gap-20 my-20">
                            <div>
                                <img className="" src={brownie} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-center text-3xl">Receta de Brownie</h3>
                                <p className="text-center my-5 text-2xl">Deja a todos encantados con estos deliciosos Brownies  y solo necesitas: {''}</p>
                                <ul className="list-disc list-outside my-5 text-xl">
                                    <li className="p-2">1/2 taza harina para hornear</li>
                                    <li className="p-2">1/8 cucharadita de sal</li>
                                    <li className="p-2">170gr chocolate semiamargo confitier Turin</li>
                                    <li className="p-2">170gr de mantequilla sin sal a temperatura ambiente</li>
                                    <li className="p-2">3 huevos a temperatura ambiente</li>
                                </ul>
                                <div className="flex justify-center my-10">
                                    <button className="bg-[#EA8239] text-2xl text-white rounded-md py-3 px-10">Receta</button>
                                </div>
                            </div>
                        </div>

                        <div className="border border-solid border-[#EA8239] mx-96 my-20"></div>
                        {/* Marcas */}
                        <div className="flex">
                            <div>
                                <img className="" src={logoTurin} alt="" />
                            </div>
                            <div>
                                <img src={logoChantilly} alt="" />
                            </div>
                            <div>
                                <img src={logoCallebaut} alt="" />
                            </div>
                            <div>
                                <img src={logoWilton} alt="" />
                            </div>
                            <div>   
                                <img src={logoPuratos} alt="" />
                            </div>
                            <div>
                                <img src={logoGlorya} alt="" />
                            </div>
                            <div>
                                <img src={logoMetaltex} alt="" />
                            </div>
                        </div>
                        {/* Fin Marcas */}

                        {/* Vista Produstos */}
                        <div className="flex">
                            <div>
                                <img src={productoAzucarGlas} alt="" />
                            </div>
                            <div>
                                <img src={productoCremaLyncott} alt="" />
                            </div>
                            <div>
                                <img src={productoCremaRich} alt="" />
                            </div>
                            <div>
                                <img src={productoManteGloria} alt="" />
                            </div>
                            <div>
                                <img src={productoChocoCallebaut} alt="" />
                            </div>
                            <div>
                                <img src={productoDuyas} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home