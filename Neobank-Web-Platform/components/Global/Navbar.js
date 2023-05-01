import Image from 'next/image'
import React from 'react'
import { Passon, menu } from '../../public/assets'
import { Space_Grotesk } from 'next/font/google'
import { Button, Space } from 'antd';

const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const space = Space_Grotesk({
  subsets: ['latin-ext', 'vietnamese'],
  weight: ['400', '700'],
  style: 'normal'
})


function Navbar() {
  return (
    // Creating round glassmorhpic navbar with round corners
    <div className='rounded-lg mx-3 mt-3 mb-1 bg-slate-100'>
      <div className="flex justify-center px-7">
        <Image src={Passon} alt="logo" className='rounded-md mr-auto pointer-events-none h-12 w-32 mt-2' />
        <nav className='text-black text-lg navbar navbar-expand-lg navbar-light flex gap-12'>
          <button className={space.className}>Welcome to Magic👻Pass !</button>
        </nav>
        <div className='bg-slate-300 text-black rounded-full flex flex-col ml-auto my-4 pb-1 '>
          <Space wrap>
            <Button type="Text" className='text-black text-base font-medium' >Try now ⇝</Button>
          </Space>
        </div>
      </div>
    </div>

  )
}

export default Navbar