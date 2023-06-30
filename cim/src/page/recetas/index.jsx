import bgRecetas from '../../assets/img/recetas/bg2.jpg';
import brownie from '../../assets/img/recetas/brownies.jpg';
import galletasM from '../../assets/img/recetas/galletasM.jpg';
import ganache from '../../assets/img/recetas/ganache.jpg';
import mixEasy from '../../assets/img/recetas/mixEasy.jpg';
import redVelvet from '../../assets/img/recetas/redVelvet.jpg';
import tegralSatin from '../../assets/img/recetas/tegralSatin.jpg';
import betun from '../../assets/img/recetas/betun.jpg';
import cremaPastelera from '../../assets/img/recetas/cremaPastelera.jpg';
import cupcake from '../../assets/img/recetas/cupcake.jpg';

const Recipes = () => {
    return(
        <div>
            <div className='mb-24 flex justify-center items-center'>
                <div className='absolute flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-5xl'>Recetas</h1>
                    <p className='text-lg text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia impedit, <br />
                    in et quaerat saepe nulla, doloribus adipisci fugiat aperiam tenetur atque! Minima, minus animi in nihil sit accusantium praesentium.</p>
                </div>
                <img className='w-full' src={bgRecetas} alt="" />
            </div>

            <div className='grid grid-cols-3 gap-10'>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={brownie} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Brownies</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={galletasM} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Galletas de Mantequilla</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={ganache} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Ganache Clasico de Chocolate</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={mixEasy} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Mix Easy Sponge Cake</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={redVelvet} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Mix Harina Red Velvet</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={tegralSatin} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Tegral Satin Creme Cake</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={betun} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Betun de Mantequilla</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={cremaPastelera} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Crema Patelera Clasica</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
                <div className='flex flex-col items-center mb-14 gap-5'>
                    <img className='w-4/5' src={cupcake} alt="" />
                    <h3 className='text-[#EA8239] font-semibold text-2xl'>Cupcake de Mantequilla</h3>
                    <button className='border-2 border-[black] px-14 py-3 font-bold'>Ver mas</button>
                </div>
            </div>
        </div>
    )
}

export default Recipes;