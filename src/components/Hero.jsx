import React from 'react'

const Hero = () => {
  return ( 
    <div className=' max-w-[1640px] mx-auto p-4'>
        <div className=' max-h-[500px] relative'>
            {/* Overlay */}
            <div className='pl-12 absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Next</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> Generation</h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-orange-500'> Cables <span className='text-gray-200'>&</span> Wires</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://5.imimg.com/data5/TK/FE/RI/SELLER-82866892/copper-cables-500x500.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero