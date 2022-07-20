
import email from '../img/email.png'
import linkedin from '../img/linkedin.png'
import github from '../img/github.png'


const Footer = () => {
    return (
        <footer className='mt-4 pt-6'>
            <div className="bg-gradient-to-t from-rose-600 to-rose-800 py-6">
                <div className='flex flex-col gap-4 items-center justify-around lg:flex-row lg:mx-60'>
                    <nav className='mt-2 lg:flex lg:flex-col'>
                        <a className=' lg:mx-6 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white  transition-all hover:text-stone-800 hover:animate-pulse' to='sobremi'>Sobre Mi</a>
                        <a className=' lg:mx-6 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='conocimientos'>Conocimientos</a>
                        <a className='mx-1 lg:mx-6 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='proyectos'>Proyectos</a>
                        <a className='mx-1 lg:mx-6 text-white font-normal text-lg p-1 rounded-sm  hover:bg-white transition-all hover:text-stone-800 hover:animate-pulse' to='contacto'>Contacto</a>
                    </nav>
                    <nav className='flex gap-8 md:gap-20 lg:gap-8'>
                        <a href="https://www.linkedin.com/in/francisco-rey-71060419a/">
                            <img className='h-14 rounded-lg w-14' src={linkedin} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>LinkedIn</p>
                        </a>
                        <a href="mailto:reyfrancisco98@hotmail.com">
                            <img className='h-14 rounded-lg w-14' src={email} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>Email</p>
                        </a>
                        <a href="https://github.com/franrey98">
                            <img className='h-14 rounded-lg w-14' src={github} alt="ejemplo" />
                            <p className='text-center text-white mt-2 uppercase tracking-wider font-normal text-normal'>Github</p>
                        </a>
                    </nav>
                </div>
            </div>
            <div className="bg-gradient-to-t from-gray-700 to-neutral-800 py-2 pt-6">
                <h1 className='text-center text-white'>© 2022 Francisco Rey</h1>
            </div>
        </footer>
    )
}

export default Footer