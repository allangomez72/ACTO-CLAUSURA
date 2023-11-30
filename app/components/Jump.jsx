'use client'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'

const NOMBRES_SEXTO_A = ["Bal  Martín,  Nancy  Estefany", "Calí  Muchuch,  Séfora  Yulisa", "Catú  Cutzal,  Diana Lourdes Estefanía", "Catú  Cutzal,  Miguel  angel",
    "Chacach  Pichiyá,  Jonatán  Gadiel  Ramiro", "Chalí  Chipix,  Deysi  Elisa", "Chalí  Cúmez,  Angy  Noemí", "Chalí  Cutzal,  Merlyn  Anahí",
    "Chicol  Sirin, Diego Daniel Aleszandro", "Choguix  Chutá, Axel Brandon David", "Choguix  Tucubal,  Alan  Anderson  Ismael", "Corona Morales, Anghi Melany Analy", "Cos  Chalí,  Glendy  Rosmeri",
    "Cumez  Ajú,  Rosmery  Dayana", "Cutzal  Chalí,  Linder  Antoni", "Cutzal  Cutzal,  Miriam  Yesenia", "Hernández  Cux,  Helen  Aracely", "Jutzuy  Miza,  Armando  Nehemías", "Mux  Saníc,  Jennie  Rocío",
    "Poyón  Yool,  Ludwin  Enmanuel", "Quiná  Simón,  Jaqueline  Karina", "Simón  Roquel,  Teresa  Elisenda", "Son  Simón,  Neicy  Marleny", "Sucúc  Chalí,  Franklin  Orlando", "Tubac  Jutzuy,  Angel  Neftalí"];

const NOMBRES_SEXTO_C = ["Apén Lopez Mariela Noemi", "Calí Chicol Xeyla Rosmeri", "Cali Cuxil Dalia Esperanza", "Chalí Apén Erick Alfredo", "Chalí Bal Dani Fernando", "Chalí Son Emerson Oswaldo", "Chalí Tubac Alex Josué",
    "Chex Chex Hendrik Estuardo", "Cujcuj Cuxil Mildre Yulisa Noemí", "Cumez Perén Edgar Isaac", "Cumez Tuctuc Ariel Wilfredo", "Cutzal Lopez Julissa Magaly", "Icu Calí Katherine Julissa", "Icú Curuchich Katerine Addaly",
    "López Calí Kevin Leandro André", "Lopez Perén Lesly Cecilia", "Perén Son Nancy Maribel", "Perén Tuyuc Claudia Liseth", "Simón Samol Victor José", "Son Serech Heidy Karina", "Tartón Mejia Brendi Maidelin", "Tuyuc Apén Cindy Marleny",
    "Tuyúc Choguix Emerson Wilson", "Tzaj Poyon Dani Estuardo", "Tzaj Xocop Dylan David"]

const NOMBRES_SEXTO_B = ["Bal Hernández, Angel Fernando","Calí García, Keysi Yulisa", "Calí Perén, Meissy Rosanna", "Chalí Apén, Sindy Meliza", "Chalí Ichaj, Líssely Dajana", "Chalí Telón, Harol Antoni", "Cutzal Cutzal, Sandy Lourdes", "Cuxil Coy, Delmy Aracely", "Cuxil Poyón, Carlos Alexander",
"Cuxil Tzaj, Maybelin Rosmery", "Miza Sajbochol, Daniel Abraham", "Ordoñez López, Jessiny Evangely Adaly", "Otzín Notz, Fátima Angélica", "Oxlaj Xocop, Selvin Yovany", "Paz Són, Yosselin Alicia Lisseth", "Poyón García,Marvin Eduardo", "Quiná Calí, Dany Alan Eliú", "Quiná Chalí, Wilder Ismael Humberto",
"Quiná Cutzal, Melany Lourdes", "Quiná Perén, Sindy Elizabeth", "Serech Solano, Marta Alicia", "Simón Mux, Anderson David", "Sotz Chex, Kimberly Dallana Celeste", "Xocop Simón, Luis Angel" ]

const TAB_DATA = [
    {
        title: "Sexto A",
        id: "Sexto A",
        content: (
            <>

                <div className='rounded-lg overflow-hidden bg-gradient-to-r from-[#181818] to-[#303030] p-4'>
                    <Image
                        src="/images/FB-20.webp"
                        alt="gradoA"
                        width={1000}
                        height={1000}
                        className='rounded-lg'
                    />
                </div>

                <br></br>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden table-auto bg-[#181818]">
                        <thead>
                            <tr className="border-b bg-[#121212] text-white">
                                <th className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4">Felicidades a:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NOMBRES_SEXTO_A.map((nombre, index) => (
                                <tr
                                    key={index}
                                    className={`transition-all duration-300 ease-in-out hover:bg-gray-600 ${index % 2 === 0 ? 'bg-[#181818]' : 'bg-[#121212]'
                                        }`}
                                >
                                    <td className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4 border-b text-white">{nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>

        )
    },
    {
        title: "Sexto B",
        id: "Sexto B",
        content: (
            <>
                <div className='rounded-lg overflow-hidden bg-gradient-to-r from-[#181818] to-[#303030] p-4'>
                    <Image
                        src="/images/FB-15.webp"
                        alt="gradoB"
                        width={1000}
                        height={1000}
                    />
                </div>
                <br></br>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden table-auto bg-[#181818]">
                        <thead>
                            <tr className="border-b bg-[#121212] text-white">
                                <th className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4">Felicidades a:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NOMBRES_SEXTO_A.map((nombre, index) => (
                                <tr
                                    key={index}
                                    className={`transition-all duration-300 ease-in-out hover:bg-gray-600 ${index % 2 === 0 ? 'bg-[#181818]' : 'bg-[#121212]'
                                        }`}
                                >
                                    <td className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4 border-b text-white">{nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    },
    {
        title: "Sexto C",
        id: "Sexto C",
        content: (
            <>
                <div className='rounded-lg overflow-hidden bg-gradient-to-r from-[#181818] to-[#303030] p-4'>
                    <Image
                        src="/images/FB-17.webp"
                        alt="gradoC"
                        width={1000}
                        height={1000}
                    />
                </div>
                <br></br>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-600 rounded-lg overflow-hidden table-auto bg-[#181818]">
                        <thead>
                            <tr className="border-b bg-[#121212] text-white">
                                <th className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4">Felicidades a:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NOMBRES_SEXTO_C.map((nombre, index) => (
                                <tr
                                    key={index}
                                    className={`transition-all duration-300 ease-in-out hover:bg-gray-600 ${index % 2 === 0 ? 'bg-[#181818]' : 'bg-[#121212]'
                                        }`}
                                >
                                    <td className="py-1 px-2 sm:py-2 sm:px-3 md:py-2 md:px-4 lg:py-3 lg:px-4 border-b text-white">{nombre}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
]

const Jump = () => {

    const [tab, setTab] = useState("Sexto A");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="flex flex-col items-center justify-center w-full h-full" id="contact"><div className='flex items-center justify-center w-full'>
            <TabButton selecTab={() => handleTabChange("Sexto A")} active={tab == "Sexto A"}>
                {" "}
                Sexto A{" "}
            </TabButton>
            <TabButton selecTab={() => handleTabChange("Sexto B")} active={tab == "Sexto B"}>
                {" "}
                Sexto B{" "}
            </TabButton>
            <TabButton selecTab={() => handleTabChange("Sexto C")} active={tab == "Sexto C"}>
                {" "}
                Sexto C{" "}
            </TabButton>
        </div>
            <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </section>
    )
}

export default Jump