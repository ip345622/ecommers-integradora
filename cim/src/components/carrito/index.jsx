
import chocolate from '../../assets/img/carrito/chocolate.png'
import domo from '../../assets/img/carrito/domo.png'

const Cart = () => {
  

  return (
    <div className="w-[40%] mt-[-3px] ml-[60%] z-10 h-auto  absolute bg-white">
      {/* producto lista */}
      <h1 className='text-center font-bold text-3xl m-1'>Productos agregados</h1>
      <div>
        {/* contenedor */}
      <div className="flex justify-between border-orange-500 border-2 bg-white">
        <img src={chocolate} alt="" className='ml-2' />
        <p>Chocolate Amargo Callebaut 400g</p>
        {/* botones agregar o quitar cantidad */}
        <div className='flex justify-between w-[14%] absolute mt-9 ml-[43%] '>
          <button className='bg-orange-500 w-7 h-7 m-auto flex justify-center font-bold rounded-lg'>-</button>
          <p className='m-auto p-2 '>2</p>
          <button className='bg-orange-500 w-7 h-7 m-auto flex justify-center font-bold rounded-lg'>+</button>
        </div>
        <p className='mr-4'>Total: $<span>350</span></p>
      </div>
      {/* producto 2 */}
      <div className="flex justify-between border-orange-500 border-2 mt-2 bg-white">
        <img src={domo} alt="" className='ml-2'/>
        <p>domo de 32</p>
        {/* botones agregar o quitar cantidad */}
        <div className='flex justify-between w-[16%] absolute mt-9 ml-[43%] '>
          {/* <button className='bg-orange-500 w-7 h-7  flex justify-center font-bold '>X</button> */}
          <button className='bg-orange-500 w-7 h-7 m-auto flex justify-center font-bold rounded-lg'>-</button>
          <p className='m-auto p-2 '>2</p>
          <button className='bg-orange-500 w-7 h-7 m-auto flex justify-center font-bold rounded-lg'>+</button>
        </div>
        <p className='mr-4'>Total: <span>$350</span></p>
      </div>
      </div>
     {/* comprar */}
     <div className=' flex flex-col items-center m-3'>
     <p className='flex justify-evenly m-1'>Total a pagar: <span>$777</span></p>
      <button className='rounded-sm bg-orange-400  w-[15%]'>comprar</button>
     </div>
    </div>
  );
};

export default Cart;