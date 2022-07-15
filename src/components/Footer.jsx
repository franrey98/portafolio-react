import { Link } from "react-router-dom"
import fotoejemplo from '../img/fondo.jpg'


const Footer = () => {
    return (
        <footer className='mt-4 pt-6'>
            <div className="bg-gradient-to-t from-rose-600 to-rose-800 py-6">
                <div className='flex flex-col gap-4 items-center justify-around'>
                    <nav className='mt-2'>
                        <Link className=' lg:mx-10 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white  transition-all hover:text-stone-800 hover:animate-pulse' to='sobremi'>Sobre Mi</Link>
                        <Link className=' lg:mx-10 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='conocimientos'>Conocimientos</Link>
                        <Link className='mx-1 lg:mx-10 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='proyectos'>Proyectos</Link>
                        <Link className='mx-1 lg:mx-10 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='contacto'>Contacto</Link>
                    </nav>
                    <nav className='flex gap-8 md:gap-20'>
                        <a href="#">
                            <img className='h-12' src={fotoejemplo} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>LinkedIn</p>
                        </a>
                        <a href="#">
                            <img className='h-12' src={fotoejemplo} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>LinkedIn</p>
                        </a>
                        <a href="#">
                            <img className='h-12' src={fotoejemplo} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>LinkedIn</p>
                        </a>
                    </nav>
                </div>
            </div>
            <div className="bg-gradient-to-t from-gray-700 to-neutral-800 py-2">
                <h1 className='text-center text-white'>© 2022 Francisco Rey</h1>
            </div>
        </footer>
    )
}

export default Footer