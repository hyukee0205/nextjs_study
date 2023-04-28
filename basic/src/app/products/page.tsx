import { getProducts } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import test from '../../../public/images/test.jpg'


export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section>
      <h1>제품 소개 페이지!</h1>
      <Image src={test} alt='Clothes' priority/>
      <ul>
        {products.map(({id, name}, index) => <li key={index}><Link href={`/products/${id}`}>{name}</Link></li>)}
      </ul>
      <MeowArticle />

    </section>
  );
}

