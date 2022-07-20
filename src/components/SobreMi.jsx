import React from 'react'

const SobreMi = () => {
    return (
        <section id='sobremi' className='py-10'>
            <div className='md:mt-20 bg-gradient-to-t from-zinc-700 to-neutral-800 lg:py-24 lg:pt-16'>
                <div className='md:mx-32 2xl:mx-80'>
                    <h1 className='text-center mt-8 pt-6 font-medium text-4xl uppercase text-white tracking-wider lg:pt-0'>Sobre Mi</h1>
                    <hr className="mx-8 mt-8" />
                    <p className='text-white mx-16 lg:mx-48 mt-8 font-medium text-2xl text-center leading-8 tracking-widest'>Mi nombre es Francisco Rey, tengo 23 años y vivo en Gonnet, Ciudad de La Plata. Actualmente me encuentro estudiando Programación. Arranque en febrero de 2021 como autodidacta, probando distintos cursos en los cuales descubrí que esto era lo que me gustaba. Me encantó el desarrollo web así que me propuse seguir estudiándolo.
                    </p>
                    <p className='text-white mx-16 lg:mx-48 mt-8 text-lg text-center pb-8 leading-8'>En este tiempo de estudio, logre aprender HTML, CSS y JavaScript.
                        También me capacite en librerías como React, Tailwind, jQuery, Bootstrap.

                    </p>
                    <p className='text-white mx-16 lg:mx-48 mt-4 text-lg text-center pb-8 leading-8'>Estoy en busca de mi primera experiencia laboral.Tengo un gran interés de mostrar las capacidades adquiridas en los distintos cursos que realice, y poder experimentarlos en una empresa.</p>
                </div>
            </div>
        </section>
    )
}

export default SobreMi