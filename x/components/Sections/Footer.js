import { dark } from "../../public/assets"
import Image from 'next/image'
import { Anton } from 'next/font/google'

const vina = Anton({
    subsets: ['latin-ext', 'vietnamese'],
    weight: ['400'],
    style: 'normal'
})


function Footer() {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-black'>
                <Image src={dark} alt="light" className="object-cover mt-16" />

                <div className="text-white text-9xl font-bold text-center mt-5" >
                    <h1 className={vina.className}>FIND YOUR</h1>
                    <h1 className={vina.className}>STRENGTH</h1>
                </div>
                <button className='text-lg text-white px-10 py-2 my-10 rounded-full mt-10 font-bold border-2 border-white'>JOIN TODAY</button>
            
            </div>
        </>
    )
}

export default Footer