import Aadhar from '/public/assets/Pass/aadhar.jpg'
import Pan from '/public/assets/Pass/pan.jpg'
import { useRouter } from 'next/router'

function Hero() {
    const router = useRouter()
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5 items-center font-bold">
                    <div className="ml-auto mr-auto mt-10 text-5xl ">
                        <span>Privacy made simple. </span>
                    </div>
                    <div className="ml-auto mr-auto text-5xl ">
                        <span>Protect your data today.</span>
                    </div>
                    <div className="ml-auto mr-auto text-base text-gray-600 ">
                        <span>Just Select What KYC Do You Want !</span>
                    </div>

                </div>
                <div className="flex flex-row gap-5 mt-10 font-semibold">
                    <div className="ml-36 text-xl font-extrabold">
                        KYC Options
                    </div>
                    <div className="ml-auto mr-16 text-xl">
                        Explore All
                    </div>
                </div>
                <div className="flex flex-wrap ml-36 mt-5">
                    <div className="bg-[#ececec] shadow-md rounded-md p-4 m-2 max-w-xs border-2 border-[#0ed58f]">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={Aadhar.src} alt="Placeholder image" />
                            <div>
                                <h2 className="text-lg font-semibold">Aadhar</h2>
                                <p className="text-gray-600">Aadhar is a unique 12-digit identification number issued to Indian citizens by the Unique Identification Authority of India (UIDAI) based on their biometric and demographic data.</p>
                            </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-slate-300 rounded-lg text-whiterounded-md" onClick={()=>router.push('/pass/aadhar')}>Connect Aadhar</button>
                    </div>
                    <div className="bg-[#ececec] shadow-md rounded-md p-4 m-2 max-w-xs border-2 border-[#c2dd12]">
                        <div className="flex items-center">
                            <img className="w-10 h-10 rounded-full mr-4" src={Pan.src} alt="Placeholder image" />
                            <div>
                                <h2 className="text-lg font-semibold">Pan Number</h2>
                                <p className="text-gray-600">Aadhar is a unique 12-digit identification number issued to Indian citizens by the Unique Identification Authority of India (UIDAI) based on their biometric and demographic data.</p>
                            </div>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-slate-300 rounded-lg text-whiterounded-md" onClick={()=>router.push('/pass/pan')}>Connect Pan</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero