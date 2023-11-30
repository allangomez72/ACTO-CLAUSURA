'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Image from 'next/image'


const images = [
    "/images/FB-14.webp",
    "/images/FB-07.webp",
    "/images/FB-09.webp",
    "/images/FB-11.webp",

    // Agrega otras imágenes aquí
];


const AboutSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,          // Activar reproducción automática
        autoplaySpeed: 3000      // Velocidad en milisegundos (3 segundos en este caso)
    };

    return (
        <section className='text-white' id="protocolo">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            {/* Marco alrededor de la imagen */}

                            <Image
                                src={image}
                                alt={`Slide ${index + 1}`}
                                width={1000}
                                height={1000}
                            />
                        </div>
                    ))}
                </Slider>
                <div>
                    <br></br>
                    <h2 className='text-4xl font-bold text-white mb-4'>Acto protocolario</h2>
                    <p className='text-base md:text-lg'>La Dirección, Personal Docente, Alumnos y Alumnas de la XXIX Promoción y Directiva de Padres de Familia de la Escuela Oficial Urbana Mixta &quot;Catonal&quot;,
                        invita a usted y familia al Acto de Clausura de Sexto grado, que se realizara el dia 6 de diciembre del presente año, a partir de las 8:00 horas en las instalaciones de nuestro
                        establecimiento.
                    </p>
                    <br></br>
                    <h2 className='text-1xl font-bold text-white mb-4 text-center'>ATENTAMENTE</h2>
                    <div className='flex flex-wrap justify-between items-center mx-auto max-w-2xl'>
                        <div className='text-center w-full md:w-1/2 lg:w-1/3 p-4'>
                            <p className='text-base md:text-lg font-bold'>José Rafael Calí Otzoy</p>
                            <p className='font-semibold'>Profesor de grado</p>
                            <br></br>
                            <p className='text-base md:text-lg font-bold'>Enma Gómez Mux</p>
                            <p className='font-semibold'>Profesora de grado</p>

                        </div>
                        <div className='w-1/5'></div>
                        <div className='text-center w-full md:w-1/2 lg:w-1/3 p-4'>
                            <p className='text-base md:text-lg font-bold'>Saraí Peneleu Yojcom</p>
                            <p className='font-semibold'>Profesora de grado</p>
                            <br></br>
                            <p className='text-base md:text-lg font-bold'>Julio César Calí Otzoy</p>
                            <p className='font-semibold'>Director</p>

                        </div>
                    </div>
                    <br></br>
                    <p className='text-base md:text-lg'> San Juan Comalapa, diciembre 2023</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection