import fotocv from '../img/fotocv2.jpeg'


const Main = () => {
    return (
        <div>
            <div className='flex justify-center mt-16'>
                <div className='border-8 border-white-400 rounded-sm shadow-2xl p-3 bg-white'>
                    <img className='h-64 flex' src={fotocv} alt="fotocv" />
                    <h1 className='text-center mt-4 text-xl font-bold uppercase'>Francisco Rey</h1>
                    <div className=' bg-gradient-to-r from-sky-500 to-indigo-500'>
                        <h2 className='text-center text-gray-200 uppercase mt-4 text-base font-bold tracking-widest'>Front-End Developer</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main