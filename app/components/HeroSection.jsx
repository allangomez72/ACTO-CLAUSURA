"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'


const HeroSection = () => {
    return (
        <section id="about">
            <div className='grid grid-cols-1 sm:grid-cols-12' >
                <div className='col-span-7 place-self-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                            Colegio Zzz{""}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Acto de clausura',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Graduation Ceremony',
                                1000,
                                'Sexto Primaria',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta fugiat eveniet nam veniam velit nesciunt dolor ex. Aliquid, odit magni! Temporibus pariatur aut consequatur quibusdam placeat tempore quae provident.
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Boton</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src="/images/graduation.png"
                            alt="graduation"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HeroSection