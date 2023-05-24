import Image from 'next/image';
import profileImage from '../../public/images/profile.jpg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='text-center'>
      <Image 
        className='mx-auto rounded-full'
        src={profileImage}
        alt='Picture of the author'
        width={250}
        height={250}
        priority 
      />
      <h2 className='text-3xl font-bold mt-2'>Hi,hyuk</h2>
      <h3 className='text-xl font-semibold'>FE Enginner</h3>
      <p>안녕하세요</p>
      <Link href='/contact'>
        <button className='bg-yellow-400 font-bold rounded-xl py-1 px-4 mt-2'>Contact Me</button>
      </Link>
    </section>
  );
}

