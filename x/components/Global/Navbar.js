import { useRouter } from 'next/router';
import { Pass, Home, Request } from '../../public/assets/Navbar';
import Image from 'next/image';
import { useDisconnect } from "@thirdweb-dev/react";

function Nav() {
  const router = useRouter();
  const disconnect = useDisconnect();

  return (
    <nav className="fixed top-0 left-0 h-full w-16 bg-neutral-900 flex flex-col justify-between mt-5  ml-5 items-center text-white rounded-xl" style={{ height: "calc(100vh - 2.75rem)" }} >
      <div className="mt-10 mb-5">
        <button onClick={() => router.push('/')} 
          className={` rounded-md ${router.pathname === '/'
            ? 'shadow-lg transition-shadow  animate-bounce border-b-2 '
            : 'border-transparent'
            }`}
        >
          <Image src={Home} alt="Logo" width={35} height={35} />
        </button>
      </div>
      <div className="my-5">
        <button
          className={` rounded-md ${router.pathname === '/pass'
            ? 'shadow-lg transition-shadow animate-bounce border-b-2 '
            : 'border-transparent'
            }`}
            onClick={() => router.push('/pass')}
        >
          <Image src={Pass} alt="Logo" width={35} height={35} />
        </button>
      </div>
      <div className="my-5">
        <button className={` rounded-md ${router.pathname === '/request'
          ? 'shadow-lg transition-shadow  animate-pulse border-b-2 '
          : 'border-transparent'
          }`}>
          <Image src={Request} alt="Logo" width={25} height={25} />
        </button>
      </div>
      <div className="my-5 mt-auto">
        <svg width="20px" height="20px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier" fill='none' stroke='white' strokeMiterlimit={10} strokeWidth={2}>
            <circle className="cls-1" cx="12" cy="7.25" r="5.73" />
            <path className="cls-1" d="M1.5,23.48l.37-2.05A10.3,10.3,0,0,1,12,13h0a10.3,10.3,0,0,1,10.13,8.45l.37,2.05" />
          </g>
        </svg>
      </div>
      <div className="mt-5 mb-10">
        <button  onClick={disconnect}>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier"> <path d="M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z" fill="#ffffff" /> <path d="M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z" fill={router.pathname === '/' ? 'white' : 'gray'} /> <path d="M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z" fill={router.pathname === '/' ? 'white' : 'gray'} /> </g>
          </svg>
        </button>
      </div>
    </nav>

  );
}

export default Nav;
