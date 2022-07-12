import Main from './Main'
import SobreMi from './SobreMi'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='img-fondo'>
            <div className='flex items-center justify-around'>
                <nav className='mt-4'>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all' to='sobremi'>Sobre Mi</Link>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all' to='conocimientos'>Conocimientos</Link>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all' to='proyectos'>Proyectos</Link>
                    <Link className='mx-1 text-white font-normal text-lg p-1 rounded-sm  hover:bg-indigo-600 transition-all' to='contacto'>Contacto</Link>
                </nav>
            </div>
            <div>
                <Main />
                <SobreMi />
            </div>
        </div>
    )
}

export default Header