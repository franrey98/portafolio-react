import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='img-fondo'>
            <div className='flex items-center justify-around'>
                <nav className='mt-4 md:mt-16'>
                    <Link className=' md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='sobremi'>Sobre Mi</Link>
                    <Link className=' md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='conocimientos'>Conocimientos</Link>
                    <Link className='mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='proyectos'>Proyectos</Link>
                    <Link className='mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='contacto'>Contacto</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header