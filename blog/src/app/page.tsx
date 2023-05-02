import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
    </>
  )
}
