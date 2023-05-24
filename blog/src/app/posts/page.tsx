import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'All Posts',
  description: 'FE 관련 블로그 글'
}


export default async function PoststPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))]
  // console.log(categories);

  return (
    <FilterablePosts posts={posts} categories={categories} />
  )
}
