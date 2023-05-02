import { getNonFeaturePosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
  const posts = await getNonFeaturePosts();

  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>더 다양한 자료</h2>
      <MultiCarousel>
        {posts.map((post) => <PostCard key={post.path} post={post} />)}
      </MultiCarousel>
    </section>
  );
}

