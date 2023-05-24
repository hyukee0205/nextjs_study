import Hero from '@/components/Hero';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About Me',
  description: '혁이의 커리어 소개'
}

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2'
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>다양한 UI/UX 경험을 갖고 있습니다.</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          1인 온라인 쇼핑몰 운영 <br />
          기아자동차 인턴
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Next, TS <br />
          Git, VS code
        </p>
      </section>
    </>
  )
}

