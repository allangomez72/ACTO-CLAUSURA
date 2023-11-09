'use client'
import React, { useTransition, useState } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'

const TAB_DATA = [
    {
        title: "Sexto A",
        id:"Sexto A",
        content:(
            <>
            <Image
                    src="/images/GradoA.png"
                    alt="gradoA"
                    width={500}
                    height={500}
                />
                <br></br>
            <ul className='list-disc pl-2'>
                <li>Nombre 1</li>
                <li>Nombre 2</li>
                <li>Nombre 3</li>
                <li>Nombre 4</li>
            </ul>
            </>
            
        )
    },
    {
        title: "Sexto B",
        id:"Sexto B",
        content:(
            <>
            <Image
                    src="/images/GradoB.png"
                    alt="gradoB"
                    width={500}
                    height={500}
                />
                <br></br>
            <ul className='list-disc pl-2'>
                <li>NAME 1</li>
                <li>NAME 2</li>
                <li>NAME 3</li>
                <li>NAME 4</li>
            </ul>
            </>
        )
    },
    {
        title: "Sexto C",
        id:"Sexto C",
        content:(
            <>
            <Image
                    src="/images/GradoC.png"
                    alt="gradoC"
                    width={500}
                    height={500}
                />
            <ul className='list-disc pl-2'>
            <br></br>
                <li>Nombre 1</li>
                <li>Nombre 2</li>
                <li>Nombre 3</li>
                <li>Nombre 4</li>
            </ul>
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
        <div className='mt-8'>{TAB_DATA.find((t) => t.id===tab).content}</div>
        </section>
    )
}

export default Jump