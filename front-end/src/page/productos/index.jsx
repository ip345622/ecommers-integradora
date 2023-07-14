
import fondo from '../../assets/img/products/fondo.png'
import { ListaProductos } from '../../components/listaProductos';
import { Slider } from '../../components/sliderProveedores'
// import {InicioSesion} from '../../components/inicioSesion/index.jsx'


export default function Products() {
// const [carrito, setCarrito] = useState([]);
// const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   };


  return (
    <section>
      {/* Imagen fondo */}
      <div >
        <img src={fondo} alt="" className='w-full'/>
                <h2 className="decoration-black text-5xl ml-[46%] mt-[-10%] absolute font-semibold bg-white pl-8 pr-8 pb-3 rounded-lg">Productos</h2>
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
