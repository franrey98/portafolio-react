
const Header = () => {
    return (
        <div className='img-fondo'>
            <div className='flex items-center justify-around'>
                <nav className='mt-4 md:mt-8 lg:mt-16'>
                    <ul className='lg:flex'>
                        <li>
                            <a className=' md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' href='sobremi'>Sobre Mi</a>
                        </li>
                        <li>
                            <a className=' md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' href='conocimientos'>Conocimientos</a>
                        </li>
                        <li>
                            <a className='mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' href='proyectos'>Proyectos</a>
                        </li>
                        <li>
                            <a className='mx-1 md:mx-6 lg:mx-10 text-white font-normal text-lg p-1  rounded-sm  hover:bg-indigo-600 transition-all hover:animate-pulse' href='contacto'>Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header