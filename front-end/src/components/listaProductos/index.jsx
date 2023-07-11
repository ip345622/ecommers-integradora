import harina from '../../assets/img/products/harina.png'
import glicerina from '../../assets/img/products/glicerina.png'
import monin from '../../assets/img/products/monin.png'
import estrella from '../../assets/img/products/estrella.png'
import aromitalia from '../../assets/img/products/aromitalia.png'

export const ListaProductos = () =>{
    const productos = [
        {
            nombre: 'Aromalia',
            imagen: aromitalia,
            descripcion: 'Mejora la experiencia de tus clientes con marketing olfativo.',
            cantidad: '200 g',
            precio: 45
        },
        {
            nombre: 'Estrella',
            imagen: estrella,
            descripcion: 'Mejora la experiencia de tus clientes con marketing olfativo.',
            cantidad: '200 g',
            precio: 45
        },
        {
            nombre: 'Glicerina',
            imagen: glicerina,
            descripcion: 'Mejora la experiencia de tus clientes con marketing olfativo.',
            cantidad: '200 g',
            precio: 45
        },
        {
            nombre: 'Harina',
            imagen: harina,
            descripcion: 'Mejora la experiencia de tus clientes con marketing olfativo.',
            cantidad: '200 g',
            precio: 45
        },
        {
            nombre: 'Monin',
            imagen: monin,
            descripcion: 'Mejora la experiencia de tus clientes con marketing olfativo.',
            cantidad: '200 g',
            precio: 45
        }
    ];
    return (
        <section className='w-full h-full'>
            <h1 className="text-center font-bold text-5xl text-[#8F2C02]">PRODUCTOS</h1>
            {/* productos */}
            <div className="flex flex-wrap justify-center w-full mb-3 mt-5">
                {/* contenedor */}
                {/* iterando */}
            {productos.map((producto, index) => (
                <div key={index} className="w-[200px] m-auto hover:text-orange-500">
          <img src={producto.imagen} alt="" className='mt-5 mb-3' />
          <hr/>
            <p className='font-bold text-2xl text-center'>${producto.precio}</p>
          <h3 className='text-center font-semibold text-lg'>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <div className='flex justify-evenly'>
            <button className='bg-orange-500 w-[35%] h-7 rounded-xl'><box-icon name='cart-add' className='m-auto'></box-icon></button>
            <button className='bg-orange-500 w-[35%] h-7 rounded-xl'><box-icon name='money-withdraw' className='m-auto'></box-icon></button>

          </div>
        </div>
      ))}
            </div>
        </section>
    )
}