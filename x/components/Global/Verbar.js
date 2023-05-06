import { Chakra_Petch } from 'next/font/google'
import { ConnectWallet } from "@thirdweb-dev/react";

const petch = Chakra_Petch({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
    style: 'normal'
})


function Verbar() {

    return (
        <div className="flex flex-row gap-12 uppercase items-center">
            <div className="ml-36 mt-10 font-semibold text-2xl">
                <span className={petch.className}>Magic👻Pass</span>
            </div>
            <div className="ml-auto mr-10 mt-10 text-lg font-semibold font-serif">
                <button className={petch.className} >Docs</button>
            </div>
            <div className="mr-16 mt-10 text-lg font-serif ">
                <ConnectWallet ChainId={'goreli'} />
            </div>
        </div>
    )
}

export default Verbar