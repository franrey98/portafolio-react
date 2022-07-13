import Main from './Main'
import SobreMi from './SobreMi'
import Conocimientos from './Conocimientos'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='img-fondo'>
            <div className='flex items-center justify-around'>
                <nav className='mt-4'>
                    <Link className=' text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='sobremi'>Sobre Mi</Link>
                    <Link className=' text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='conocimientos'>Conocimientos</Link>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='proyectos'>Proyectos</Link>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' to='contacto'>Contacto</Link>
                </nav>
            </div>
            <div>
                <Main />
                <SobreMi />
                <Conocimientos />
                <Proyectos />
                <Contacto />
                <Footer />
            </div>
        </div>
    )
}

export default Header