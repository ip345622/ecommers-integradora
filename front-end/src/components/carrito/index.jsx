
import chocolate from '../../assets/img/carrito/chocolate.png'
import domo from '../../assets/img/carrito/domo.png'
import { BsFillPatchMinusFill,BsFillPatchPlusFill,BsFillTrashFill } from "react-icons/bs";

const Cart = () => {
  

  return (
    <div className="w-[40%] mt-[-3px] ml-[60%] z-10 h-auto  absolute bg-white">
      {/* producto lista */}
      <h1 className='text-center font-bold text-3xl m-1'>Productos agregados</h1>
      <div>
        {/* contenedor */}
      <div className="flex justify-evenly border-orange-500 border-2 bg-white">
        <img src={chocolate} alt="" className='ml-2' />
        <p>Chocolate Amargo Callebaut 400g</p>
        {/* botones agregar o quitar cantidad */}
        <div className='flex justify-between w-[14%] absolute mt-9 ml-[20%] '>
        <BsFillPatchMinusFill className=' w-7 h-7 m-auto flex justify-center font-bold rounded-lg text-orange-500'/>
          <p className='m-auto p-2 '>2</p>
          <BsFillPatchPlusFill className='w-7 h-7 m-auto flex justify-center font-bold rounded-lg text-orange-500'/>
        </div>
        <p className=''>Total: $<span>350</span></p>
        <BsFillTrashFill className='text-5xl items-center mt-5  border-2 border-l-orange-500 mr-[-10%]' />
      </div>
      {/* producto 2 */}
      <div className="flex justify-evenly border-orange-500 border-2 mt-2 bg-white">
        <img src={domo} alt="" className='ml-2'/>
        <p>domo de 32</p>
        {/* botones agregar o quitar cantidad */}
        <div className='flex justify-between w-[16%] absolute mt-9 ml-[43%] '>
          {/* <button className='bg-orange-500 w-7 h-7  flex justify-center font-bold '>X</button> */}
          <BsFillPatchMinusFill className=' w-7 h-7 m-auto flex justify-center text-orange-500'/>
          <p className='m-auto p-2 '>2</p>
          <BsFillPatchPlusFill className='w-7 h-7 m-auto flex justify-center font-bold rounded-lg text-orange-500'/>
        </div>
        <p className=''>Total: <span>$350</span></p>
        <BsFillTrashFill className='text-5xl items-center mt-5 mr-[-14%] border-2 border-l-orange-500' />

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