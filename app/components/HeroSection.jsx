"use client"
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="about">
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <div className='col-span-7 place-self-center sm:text-left'>
          <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold' style={{
            background: 'linear-gradient(to right, #1565C0, #64B5F6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
            Escuela Oficial<br /> Urbana Mixta Cantonal
          </h1>
          <h2 className='mb-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold'>
            <span style={{ color: '#ffcc00' }}>Promoción XXIX</span> <br />
            <span className='text-white'>2018-2013<br />Clausura Sexto Primaria</span>
          </h2>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'></p>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src="/images/logoescuela.webp"
              alt="graduation"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
