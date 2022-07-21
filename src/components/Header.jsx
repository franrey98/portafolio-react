import { Link } from 'react-scroll'

const Header = () => {
    return (
        <div className='bg-black md:h-22'>
            <div className='flex items-center justify-around'>
                <nav className='p-4 md:mt-8 md:pb-4'>
                    <ul className='md:flex lg:flex'>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='sobremi' className='cursor-pointer md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' >Sobre Mi</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='conocimientos' className='cursor-pointer md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse'>Conocimientos</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='proyectos' className='cursor-pointer mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse'>Proyectos</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='contacto' className='cursor-pointer mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header