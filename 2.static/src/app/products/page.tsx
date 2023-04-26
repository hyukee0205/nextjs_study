import Link from 'next/link';

export default function ProductsPage() {
  const list = ['shirt', 'pants', 'skirt', 'shoes']
  return (
    <section>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {list.map((item, index) => <li key={index}><Link href={`/products/${item}`}>{item}</Link></li>)}
      </ul>
    
    </section>
  );
}

