import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header className='bg-sky-800 md:h-22'>
            <div className='flex items-center justify-around'>
                <nav className='p-2 md:mt-8 md:pb-6'>
                    <ul className='md:flex lg:flex'>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='sobremi' className='cursor-pointer md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-white hover:text-black transition-all hover:animate-pulse' >Sobre Mi</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='conocimientos' className='cursor-pointer md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-white hover:text-black transition-all hover:animate-pulse'>Conocimientos</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='proyectos' className='cursor-pointer  md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-white hover:text-black transition-all hover:animate-pulse'>Proyectos</Link>
                        </li>
                        <li>
                            <Link smooth={true} offset={50} duration={500} to='contacto' className='cursor-pointer  md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-white hover:text-black transition-all hover:animate-pulse'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header