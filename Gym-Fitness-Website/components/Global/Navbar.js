import Image from 'next/image'
import React from 'react'
import { navlogo } from '../../public/assets'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin-ext', 'vietnamese'],
  weight: ['400', '700'],
  style: 'normal'
})


function Navbar() {
  return (
    // Creating round glassmorhpic navbar with round corners
    <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <div className="flex justify-center px-7">
        <Image src={navlogo} alt="logo" width={100} height={100} className='mr-auto pointer-events-none ' />
        <nav className=" font-sans text-base font-semibold navbar navbar-expand-lg gap-8 navbar-light pl-4 px-3 flex max-sm:px-4 items-center ">
          <button className={roboto.className} > About</button>
          <button className={roboto.className}> Training</button>
          <button className={roboto.className}>Testimonials</button>
          <button className={roboto.className}>Contact</button>
        </nav>

        <button className="ml-auto uppercase text-black font-bold  border-2 border-black rounded-full my-7 px-5">Join Today</button>
      </div>
    </div>

  )
}

export default Navbar