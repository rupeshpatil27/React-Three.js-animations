import React from 'react'
import HeroExperience from './HeroExperience'

const Hero = () => {
    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='relative z-10 p-5 xl:p-10 h-[80vh] flex flex-col xl:flex-row xl:item-center items-center'>

                <div className='flex flex-col gap-1 items-center text-red-400 md:text-amber-300 xl:text-blue-600'>
                    <h1>This is For demo</h1>
                    <h1>3D animation test</h1>
                    <h1>Good luck!</h1>
                </div>

                <figure>
                    <div className='xl:w-[70%] w-full h-full min-h-[20vh] absolute p-10 left-0 top-25 xl:-top-20 border-red-200 border-2'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero