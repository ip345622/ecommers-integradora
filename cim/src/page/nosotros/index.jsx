import fondo from '../../assets/img/nosotros/fondo.png'
import mision from '../../assets/img/nosotros/mision.png'
import vision from '../../assets/img/nosotros/vision.png'

const Us = () => {
    return(
        <section>
            {/* portada */}
            <div >
                <img src={fondo} alt="" className="w-full " />
                <div className="absolute p-2 bg-slate-50 opacity-1 rounded-md ml-[44%] mt-[-14%] w-[17%] h-[5.5%]"></div>
                <h2 className="decoration-black text-5xl ml-[45%] mt-[-14%] absolute">NOSOTROS</h2>
                
            </div>
            {/* cuerpo */}
            <section >
                <p className="text-justify m-3 text-lg text-[#51615b]">La historia de CIM comienza así... En 1989 la Sra Rosa Lilia, tuvo la oportunidad de apoyar a un reconocido Chef de Cancún ayudándole a conseguir una marqueta de chocolate semiamargo Turin, desde ese entonces, iniciaron un vínculo comercial en el cual ella suministraba todo los insumos necesarios para la creación de sus postres. A partir de ese momento se fundó CIM, dedicándose a cubrir toda la demanda de los chefs pasteleros de la zona hotelera de Cancún.
                    Con el paso de los años hemos crecido con la ciudad y el estado, haciendo alianzas con clientes desde Tulum pasando por Playa del Carmen, Cozumel e Isla mujeres. Nos llena de alegría y orgullo ser parte del motor que mueve a grandes hoteles, restaurants, cafeterías y panaderías, así como de amas de casa o padres de familia que emprenden un nuevo negocio, donde nuestros insumos y utensilios llenan de sabor y de vida los platillos de su creación.
                    Ser parte del desarrollo de negocios nos animó a abrir nuestro primer centro de capacitación ubicado en nuestra sucursal de Plaza Nichupte en Cancún, donde puedes aprender y especializarte ya sea en repostería o panadería.
                    Te esperamos en cualquiera de nuestras sucursales para que vivas con nosotros este gran amor por la repostería y la panadería, será un placer atenderte.</p>
            </section>
            {/* galeria */}
            <section>
                    <h2 className="text-center text-4xl text-[#8F2C02] font-bold m-10">BIENVENIDOS A LA FAMILIA CIM</h2>
                {/* mision */}
                <div className="flex mt-10 ml-10 mr-10">
                    <img src={mision} alt=""  className="w-[50%]"/>
                    <div className="bg-[#DC8749] w-[50%] text-center text-[#fff]">
                        <h2 className="mt-28 text-5xl">MISIÓN</h2>
                        <p className="text-justify m-10">Suministramos de manera eficiente y conveniente una amplia variedad de productos para repostería, panadería y food service con excelente servicio. Ofrecemos cursos y demostraciones para compartir ideas innovadoras y novedades, manteniendo una interacción y asesoría continua con los clientes.</p>
                    </div>
                </div>
                {/* vision */}
                <div className="flex ml-10 mr-10">
                    <div className="bg-[#fff] w-[50%] text-center">
                        <h2 className="mt-28 text-5xl text-[#BDA16A]" id="mision">VISIÓN</h2>
                        <p className="text-justify m-10">Suministramos de manera eficiente y conveniente una amplia variedad de productos para repostería, panadería y food service con excelente servicio. Ofrecemos cursos y demostraciones para compartir ideas innovadoras y novedades, manteniendo una interacción y asesoría continua con los clientes.</p>
                    </div>
                    <img src={vision} alt=""  className="w-[50%]"/>
                </div>
            </section>
            {/* valores */}
            <section className="w-full">
                <h2 className="text-center text-4xl text-[#8F2C02] font-bold m-10">NUESTROS VALORES</h2>
                {/* flex valores */}
                <div className="flex justify-between m-12 flex-wrap">
                    
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">PERSISTENCIA</h3>
                        <p>Soy constante, me mantengo firme para conseguir mis metas y alcanzar el éxito.</p>
                    </div>
                    <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">AMABILIDAD</h3>
                        <p>Soy cortés y agradable con mis compañeros, clientes y proveedores. Está virtud me facilita las relaciones con las personas que me rodean.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">SERVICIO</h3>
                        <p>Soy servicial y colaborativo con mis clientes y compañeros</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">INNOVACIÓN</h3>
                        <p>Busco constantemente mejores maneras de hacer las cosas para crear valor y beneficios.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">ALEGRÍA</h3>
                        <p>Vivo mi vida alegremente, todo es mejor con una sonrisa.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">GRATITUD</h3>
                        <p>Siempre soy agradecido con las personas que me ayudan.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">RESPONSABILIDAD</h3>
                        <p>Soy capaz de desempeñar las tareas con dedicación, cumpliendo con los plazos y alcanzando el mejor resultado posible.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">HONESTIDAD</h3>
                        <p>Soy sincero, razonable y justo con todas las personas que me rodean.</p>
                    </div>
                </div>
                <div>
                    <div className="w-[500px] ml-10 mb-10">
                        <h3 className="text-center text-3xl text-[#8F2C02]">RESPETO</h3>
                        <p>Reconozco que las personas son valiosas al igual que yo, lo demuestro tratando a todos por igual con amabilidad, simpatía y generosidad.</p>
                    </div>
                </div>
                </div>
            </section>
        </section>
    )
}

export default Us;