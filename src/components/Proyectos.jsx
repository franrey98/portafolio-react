import proyectoimg from '../img/fondo.jpg'

const Proyectos = () => {
    return (
        <section className="bg-gradient-to-t from-zinc-700 to-neutral-800 pb-8">
            <h2 className="text-center mt-8 pt-6 font-medium text-2xl uppercase text-white tracking-wider">Mis proyectos</h2>
            <h3 className="text-center text-white mt-6 font-normal text-lg">¡ Estos son mis trabajos realizados !</h3>
            <hr className="mx-8 mt-8" />
            <div>
                <div>
                    <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>TODO APP</h3>
                    <img className='p-8 pb-2' src={proyectoimg} alt="img-projecto" />
                    <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>HTML - CSS - JAVASCRIPT</p>
                    <div className='flex gap-6 justify-center mt-4'>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</button>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</button>
                    </div>
                    <hr className='mx-8 my-2 mt-6' />
                </div>
                <div>
                    <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>TODO APP</h3>
                    <img className='p-8 pb-2' src={proyectoimg} alt="img-projecto" />
                    <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>HTML - CSS - JAVASCRIPT</p>
                    <div className='flex gap-6 justify-center mt-4'>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</button>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</button>
                    </div>
                    <hr className='mx-8 my-2 mt-6' />
                </div>
                <div>
                    <h3 className='mx-8 mt-6 text-white text-center font-medium text-lg tracking-widest'>TODO APP</h3>
                    <img className='p-8 pb-2' src={proyectoimg} alt="img-projecto" />
                    <p className='mx-8 text-gray-500 font-medium text-center mt-2 text-sm tracking-widest'>HTML - CSS - JAVASCRIPT</p>
                    <div className='flex gap-6 justify-center mt-4'>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>GitHub</button>
                        <button className='p-2 font-semibold text-lg uppercase bg-rose-600/90 text-white rounded-sm hover:bg-rose-900 transition-all'>Pagina</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos