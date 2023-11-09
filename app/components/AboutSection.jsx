'use client'
import React from 'react'
import Image from 'next/image'


const AboutSection = () => {
    return (
        <section className='text-white' id ="actos">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/images/school.png"
                    alt="escuela"
                    width={500}
                    height={500}
                />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>Acto protocolario</h2>
                    <p className='text-base md:text-lg'>Alumn@s graduadas, me gustaría felicitarlos por e logro que acaban de conseguir, eso es reflejo del esfuerzo y dedicación de cada uno de ustedes. muchas felicidades. Llego el momento de buscar lo que quieren llegar a hacer y lograr afuera de esta institución.
                        La vida va a estar llena de retos y dificultades pero con esfuerzo y dedicación todo se puede lograr y yo se que ustedes son capaces de lograr sus metas, les deseo el mayor de los éxitos.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection