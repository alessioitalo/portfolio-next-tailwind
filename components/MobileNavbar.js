import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNavbar = ({ showMobile, setShowMobile }) => {
  const router = useRouter();
  return (
    <div
      className={`visible md:hidden  fixed inset-0 z-10 ${
        showMobile ? 'navVisible' : 'navHidden'
      }`}
    >
      <ul className=' bg-stone-100 dark:bg-slate-800 font-bold text-4xl flex flex-col justify-center items-center h-screen text-orange-600 uppercase'>
        <li 
          className={`py-4 ${
            router.pathname === '/' && 'underline decoration-4'
          }`}
          onClick={() => setShowMobile(false)}
        >
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`py-4 ${
            router.pathname === '/work' && 'underline decoration-4'
          }`}
          onClick={() => setShowMobile(false)}
        >
          <Link href='/work'>Portfolio</Link>
        </li>
        <li
          className={`py-4 ${
            router.pathname === '/about' && 'underline decoration-4'
          }`}
          onClick={() => setShowMobile(false)}
        >
          <Link href='/about'>About</Link>
        </li>
        <li
          className={`py-4 ${
            router.pathname === '/contact' && 'underline decoration-4'
          }`}
          onClick={() => setShowMobile(false)}
        >
          <Link href='/contact'>Contact me</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
