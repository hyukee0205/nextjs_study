import Image from 'next/image';
import Counter from '@/components/Counter';


export default function Home() {
  console.log('안녕! - 서버');
  return (
    <>
      <h1>홈페이지다 ! 버전2</h1>
      <Counter />
      <Image src='https://i.pinimg.com/564x/13/9b/81/139b81b7e9ecd9d26aadf78346ac8f03.jpg' alt='shop' 
      width={400}
      height={400}
      />
    </>
  )
}
