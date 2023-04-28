import React from 'react'
import { light } from '/public/assets'
import Image from 'next/image'
import { Anton } from 'next/font/google'
import { mainbg } from '/public/assets/'


const vina = Anton({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400'],
    style: 'normal'
})

function Features() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 pb-10">
            <Image src={light} alt="light" className="object-cover mt-16" />
            <div className="text-center mt-10 text-4xl font-semibold">
                <h1 className={vina.className}>FITTNESS SHOULD BE </h1>
                <h1 className={vina.className}> ACCESIBLE TO EVERYONE</h1>

                <p className='text-sm mt-5 object-cover mx-96'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                </p>

                <button className='text-lg text-black px-10 py-2 my-10 rounded-full mt-10 font-bold border-2 border-black'>JOIN TODAY</button>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-row' >
                    <h1 className='text-3xl font-extrabold uppercase '>Trainings</h1>
                    <h1 className='text-base font-bold uppercase ml-auto mt-auto'>see all ⇛</h1>
                </div>
                <div className='items-center my-5 rounded-full relative' >
                    <Image src={mainbg} className='rounded-3xl' style={{ width: '1120px', height: '150px', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className='text-4xl font-bold text-white absolute top-auto mb-5 ml-5 right-auto bottom-0 flex flex-col justify-center items-center'>
                        <h2 className={vina.className}>PERSONAL TRAINING</h2>
                    </div>
                </div>
                <div className='items-center my-2 rounded-full relative' >
                    <Image src={mainbg} className='rounded-3xl' style={{ width: '1120px', height: '150px', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className='text-4xl font-bold text-white absolute top-auto mb-5 ml-5 right-auto bottom-0 flex flex-col justify-center items-center'>
                        <h2 className={vina.className}>GROUP FITTNESS CLASS</h2>
                    </div>
                </div>
                <div className='items-center my-2 rounded-full relative' >
                    <Image src={mainbg} className='rounded-3xl' style={{ width: '1120px', height: '150px', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className='text-4xl font-bold text-white absolute top-auto mb-5 ml-5 right-auto bottom-0 flex flex-col justify-center items-center'>
                        <h2 className={vina.className}>FUNCTIONAL TRAINING</h2>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Features