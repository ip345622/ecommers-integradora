import fondo from '../../assets/img/productos/fondo.png'
import callebaut from '../../assets/img/inicio/marcas/Callebaut.png'
import glorya from '../../assets/img/inicio/marcas/glorya.png'
import chantilly from '../../assets/img/inicio/marcas/Chantilly.png'
import metaltex from '../../assets/img/inicio/marcas/Metaltex.png'
import puratos from '../../assets/img/inicio/marcas/puratos.png'
import wilton from '../../assets/img/inicio/marcas/wilton.png'
import Cart from '../../components/carrito/carrito'


export default function Products() {
  return (
    <section>
      {/* Imagen fondo */}
      <div >
        <Cart></Cart>
        <img src={fondo} alt="" className='w-full'/>
        <div className="absolute p-2 bg-slate-50 opacity-1 rounded-md ml-[44%] mt-[-10%] w-[17%] h-[5.5%]"></div>
                <h2 className="decoration-black text-5xl ml-[46%] mt-[-10%] absolute font-semibold">Productos</h2>
      </div>
      <section >
                <p className="text-center m-3 text-lg text-[#51615b]">Todo lo que necesitas para crear deliciosos platillos y postres. Desde harina, chocolates, rellenos, confitería, colorantes, saborizantes y mucho mas que te ayudará a llenar tu cocina de sabor.
                </p>
      </section>
      {/* proveedores */}
      <section>
        <div>
        <div className="carousel">
        <div className="slide">
            <img src={callebaut} alt="Imagen 1"/>
        </div>
        <div className="slide">
            <img src={glorya} alt="Imagen 1"/>
        </div>
        <div className="slide">
            <img src={chantilly} alt="Imagen 1"/>
        </div>
        <div className="slide">
            <img src={metaltex} alt="Imagen 1"/>
        </div>
        <div className="slide">
            <img src={puratos} alt="Imagen 1"/>
        </div>
    </div>
        </div>
      </section>
    </section>
  );
}
