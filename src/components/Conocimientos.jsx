import React from 'react'

const Conocimientos = () => {
    return (
        <section id='conocimientos' className='py-16'>
            <div className='4xl:mx-52'>
                <h2 className='text-center mt-8 text-4xl uppercase font-semibold tracking-wider'>Conocimientos</h2>
                <hr className='mx-8 my-16 lg:mx-40 border border-solid border-gray-400' />
                <ul className='grid grid-cols-2 md:grid-cols-3 md:mx-32 justify-items-center mt-8 gap-14 pb-10 mx-16'>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>Html</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400 md:from-rose-700 md:to-indigo-400'>CSS</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400 md:from-sky-700 md:to-indigo-400'>JavaScript</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400 md:from-sky-700 md:to-indigo-400'>React</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400 md:from-rose-700 md:to-indigo-400'>Tailwind</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>jQuery</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400 md:from-sky-700 md:to-indigo-400'>Bootstrap</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400'>FireBase</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>Git</li>
                    <li className='uppercase p-4 text-2xl bg-red-700 text-white w-36 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>GitHub</li>
                </ul>
            </div>
        </section>
    )
}

export default Conocimientos