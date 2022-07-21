import fotocv from '../img/fotocv2.jpeg'

const Main = () => {
    return (
        <main className=' mt-40 md:mt-32'>
            <div className='flex justify-center'>
                <div className='border-8 border-white rounded-sm shadow-2xl p-3 bg-slate-200/90'>
                    <img className='h-64 flex' src={fotocv} alt="fotocv" />
                    <h1 className='text-center mt-4 text-xl font-bold uppercase'>Francisco Rey</h1>
                    <div className=' bg-gradient-to-r from-rose-500 to-indigo-500'>
                        <h2 className='text-center text-gray-200 uppercase mt-4 text-base font-bold tracking-widest'>Front-End Developer</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main