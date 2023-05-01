import Image from 'next/image'
import React from 'react'
import { SafetyCertificateFilled } from '@ant-design/icons';
import { Space_Grotesk } from 'next/font/google'
import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const space = Space_Grotesk({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400', '700'],
    style: 'normal'
})



function index() {
    return (
        <section className={space.className} id='Home'>
            <div className='flex flex-row text-black mb-1'>
                <div className='bg-slate-100 rounded-lg ml-3 mr-1 py-3 flex-row grow'>
                    <div className='text-7xl font-semibold my-auto ml-5  flex flex-row ' >
                        <div className=''>Protect your digital life  </div>
                        <div className='border-[#82d848] text-base ml-auto mr-10 border-2  px-3 my-5 text-center rounded-lg text-[#82d848]' > <span className='text-2xl' >3+ </span> Integrated Passes </div>
                    </div>
                    <h1 className='text-7xl font-semibold my-auto ml-80 pt-5 '> <SafetyCertificateFilled style={{ color: '#82d848' }} /> with our privacy-first app.</h1>
                    <h1 className='text-base font-semibold my-auto text-right mr-10 pt-5 text-gray-500 '>Keep your data private, no matter where you go.</h1>
                    <Button className='bg-[#82d848] text-black ml-5' size='large' type='text'>Get Started 🎉</Button>
                </div>
                <button className='bg-[#8D48D8] rounded-lg mr-3 flex justify-center items-center w-20'>
                    <span className='text-lg text-white rotate-90'>
                        Download
                        <DownloadOutlined className='-rotate-90 text-[#8D48D8] bg-white px-1 py-1 rounded' />
                    </span>
                </button>

            </div>
        </section>
    )
}

export default index