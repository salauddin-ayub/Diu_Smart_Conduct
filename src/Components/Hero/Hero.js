import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#61dafb] h-screen'>
        <div className='grid md:grid-cols-3 container ml-auto mr-auto pap-2 p-1'>
            <div className='text-left py-auto md:mt-60 text-white'>
                <p className='text-3xl font-bold ml-auto mr-auto '>Lorem ipsum dolor sit amet.</p>
                <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque?ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque?</p>
            </div>
            <div className='col-span-2 w-full ml-auto md:mt-10 '>
                <img className='ml-auto mr-auto my-auto ' src="https://i.ibb.co/HX9twS5/4463205-2385577-removebg-preview.png" alt="" />
            </div>
        

        </div>
      
    </div>
  )
}

export default Hero
