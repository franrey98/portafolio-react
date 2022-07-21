import reactapp from '../img/reactapp.png'
import shortener from '../img/shortener.png'
import todoapp from '../img/todoapp.png'

const Proyectos = () => {
    return (
        <section id='proyectos' className='py-16'>
            <div className=" bg-gradient-to-t from-slate-700 to-neutral-800 pb-8">
                <h2 className="text-center mt-8 pt-10 font-medium text-4xl uppercase text-white tracking-wider">Mis proyectos</h2>
                <h3 className="text-center text-white mt-6 font-normal text-lg">¡ Estos son mis trabajos realizados !</h3>
                <hr className="mx-8 mt-8 md:mx-32 lg:mx-40 2xl:mx-96" />
                <div className='md:mx-32 lg:grid lg:grid-cols-2 2xl:mx-96'>
                    <div className='flex flex-col justify-center'>
                        <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>APP SHORTENER</h3>
                        <img className='p-8 pb-2 h-full' src={shortener} alt="img-projecto" />
                        <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>HTML - CSS - JAVASCRIPT</p>
                        <div className='flex gap-6 justify-center mt-4'>
                            <a href='https://github.com/franrey98/Proyecto-para-portafolio-1' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</a>
                            <a href='https://appshortener.netlify.app/' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</a>
                        </div>
                        <hr className='mx-8 my-2 mt-6' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>TODO APP</h3>
                        <img className='p-8 pb-2 h-full' src={todoapp} alt="img-projecto" />
                        <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>HTML - CSS - JAVASCRIPT</p>
                        <div className='flex gap-6 justify-center mt-4'>
                            <a href='https://github.com/franrey98/Proyecto-para-portafolio-2' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</a>
                            <a href='https://apptodorey.netlify.app/' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</a>
                        </div>
                        <hr className='mx-8 my-2 mt-6' />
                    </div>
                    <div className='lg:grid lg:col-start-1 lg:col-end-3 lg:p-20 lg:pt-0'>
                        <div className='flex flex-col justify-center'>
                            <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>E-COMMERCE DEPORTIVO</h3>
                            <img className='p-8 pb-2 h-full' src={reactapp} alt="img-projecto" />
                            <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>REACT - TAILWIND - FIREBASE</p>
                            <div className='flex gap-6 justify-center mt-4'>
                                <a href='https://github.com/franrey98/rey-app' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</a>
                                <a href='https://ecommerce-deportivo.netlify.app/' className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos