import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-8xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text'>
          Hi, I am Alessio
        </h1>
        <h4 className='text-4xl font-bold uppercase bg-gradient-to-b from-myOrange to-slate-700 text-transparent bg-clip-text '>
          I am a React Developer
        </h4>
        <Link href='/work' passHref><button className="rounded p-3 mt-8 font-Roboto uppercase bg-myOrange text-slate-700 dark:bg-slate-700 dark:text-myOrange">See my work</button></Link>
        <div></div>
      </div>
    </>
  );
}