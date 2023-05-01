import React from 'react'
import { Space_Grotesk } from 'next/font/google'
import { Arrow, Box, Lady } from '../../public/assets'
import Image from 'next/image'
import { Button } from 'antd'


const space = Space_Grotesk({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400', '700'],
    style: 'normal'
})

function Features() {
    return (
        <div className="flex flex-row rounded">
            <div className='bg-[#8D48D8] rounded-lg ml-3 max-h-screen flex flex-row mb-1' >
                <h1 className=' text-2xl font-semibold  ml-5 pt-5 flex flex-col ' >
                    <div className={space.className} style={{ color: 'white' }}>One-Tap </div>
                    <div className='rounded bg-[#82d848] text-center text-[#8D48D8]' > <span className={space.className}>Login</span> </div>
                    <Image src={Arrow} alt='arrow' className='w-32 h-32 mt-24 ' />
                </h1>
                <div>
                    <Image src={Lady} alt='lady' className='w-60 h-96' />
                </div>
            </div>
            <div className='bg-slate-100  rounded-lg ml-1 mb-1 flex flex-row ' >
                <div className='pt-5 py-0 px-5 text-2xl' >
                    <span className={space.className}>Features:</span>

                    <div className='py-0 px-10 text-sm' >
                        Minimal data collection.
                        <br></br>
                        Single sign-on.
                        <br></br>
                        Secure and transparent solution.
                        <br></br>
                        Privacy and security come first
                    </div>
                </div>
                <div>
                    <Image src={Box} alt='box' className='w-64 h-80 rounded-lg' />    
                </div>
            </div>
            <div className='bg-[#dff03fe5]  rounded-lg ml-1 mb-1 flex flex-row mr-3 ' >
                <div className='pt-5 py-0 px-5 text-4xl' >
                    <span className={space.className}>Join us <br></br> right Now </span>

                    <div className='py-0 px-5 text-sm max-w-screen-sm mt-5' >
                        Join our community for exclusive benefits, including early access to new features, personalized support, and exclusive content. We value your feedback and host community events to connect with other members. Click "Join Us" to create your account and start experiencing the benefits of our privacy-oriented KYC and single sign-on application.
                    </div>

                    <Button className='bg-black text-white ml-5 mt-5' size='large' type='text'>Join Us 🎉</Button>
                </div>

            </div>
        </div>
    )
}

export default Features