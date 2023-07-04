
import fondo from '../../assets/img/products/fondo.png'
import { ListaProductos } from '../../components/listaProductos';
import { Slider } from '../../components/sliderProveedores'



export default function Products() {


  return (
    <section>
      {/* Imagen fondo */}
      <div >
        <img src={fondo} alt="" className='w-full'/>
        <div className="absolute p-2 bg-slate-50 opacity-1 rounded-md ml-[45%] mt-[-9.6%] w-[17%] h-[5.5%]"></div>
                <h2 className="decoration-black text-5xl ml-[46%] mt-[-10%] absolute font-semibold">Productos</h2>
      </div>
      <section >
                <p className="text-center m-3 text-lg text-[#51615b]">Todo lo que necesitas para crear deliciosos platillos y postres. Desde harina, chocolates, rellenos, confitería, colorantes, saborizantes y mucho mas que te ayudará a llenar tu cocina de sabor.
                </p>
      </section>
      {/* proveedores */}
      <Slider />
      {/* Productos */}
      <ListaProductos />
    </section>
  );
}
