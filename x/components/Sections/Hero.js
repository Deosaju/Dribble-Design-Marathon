import Image from 'next/image'
import React from 'react'
import { mainbg } from '/public/assets/'
import { Anton, Roboto } from 'next/font/google'

const vina = Anton({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400'],
    style: 'normal'
})

const roboto = Roboto({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400', '700'],
    style: 'normal'
})


function index() {
    return (
        <div className='relative flex flex-col justify-center items-center bg-gray-100'>
            <div className='text-center mt-28 font-bold uppercase' >
                <h3 class={roboto.className} >Achive your fitness goals</h3>
            </div>
            <div className="text-black text-9xl font-bold text-center mt-5" >
                <h1 className={vina.className}>FIND YOUR</h1>
                <h1 className={vina.className}>STRENGTH</h1>
            </div>
            
            <div className='items-center my-10 rounded-full relative' >
                    <Image src={mainbg} className='rounded-3xl' style={{ width: '1120px', height: '500px', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className='text-9xl font-bold text-white absolute top-0 mb-5 ml-5 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-center'>
                        <h2 className={vina.className}>INPUT<br></br> AND OUT.</h2>
                    </div>
                </div>

        </div>
    )
}

export default index