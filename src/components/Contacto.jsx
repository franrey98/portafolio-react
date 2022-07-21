import Swal from 'sweetalert2'


const Contacto = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire('¡Todavia se esta trabajando sobre el formulario!')
    }

    return (
        <section id='contacto' className='md:mx-32'>
            <h1 className="text-center mt-3 pt-6 font-medium text-4xl uppercase tracking-wider">Contacto</h1>
            <hr className='mx-8 my-6 border border-solid border-gray-400 2xl:mx-80' />
            <h3 className='text-center font-medium text-xl mx-4'>¡Comunicate conmigo completando este formulario!</h3>
            <div className='p-2 bg-black mx-8 mt-6 rounded-sm lg:mx-40 lg:px-16 2xl:mx-80'>
                <form onSubmit={handleSubmit} className='p-2 mx-6 my-4'>
                    <div className='flex gap-2 mb-6 '>
                        <label className='text-white font-semibold text-xl' htmlFor="">Nombre:</label>
                        <input className='w-full text-lg font-semibold rounded-sm text-center' type="text" placeholder='Nombre' name='nombre' id='nombre' />
                    </div>
                    <div className='flex gap-2 my-6 '>
                        <label className='text-white font-semibold text-xl' htmlFor="">Telefono:</label>
                        <input className='w-full text-lg font-semibold rounded-sm text-center' type="tel" placeholder='Telefono' name='tel' id='tel' />
                    </div>
                    <div className='flex gap-2 my-6 '>
                        <label className='text-white font-semibold text-xl' htmlFor="">Mensaje:</label>
                        <textarea className='w-full' name="mensaje" id="mensaje" cols="30" rows="5"></textarea>
                    </div>
                    <button className='w-full cursor-pointer text-center bg-green-800 p-2 rounded-sm text-white font-semibold text-lg'>Enviar Formulario</button>
                </form>
            </div>
        </section>
    )
}

export default Contacto