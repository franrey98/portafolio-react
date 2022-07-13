import React from 'react'

const Conocimientos = () => {
    return (
        <section>
            <h2 className='text-center mt-8 text-2xl uppercase font-semibold tracking-wider'>Conocimientos</h2>
            <hr className='mx-8 my-6 border border-solid border-gray-400' />
            <ul className='grid grid-cols-2 justify-items-center mt-8 gap-4 pb-10'>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>Html</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>CSS</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400'>JavaScript</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400'>React</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>Tailwind</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>jQuery</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400'>Bootstrap</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-rose-700 to-indigo-400'>FireBase</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>Git</li>
                <li className='uppercase p-1 bg-red-700 text-white w-28 text-center rounded-sm bg-gradient-to-r hover:animate-pulse transition-all from-sky-700 to-indigo-400'>GitHub</li>
            </ul>
        </section>
    )
}

export default Conocimientos