import { getFeaturePosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturePosts();

  return (
    <section>
      <h2 className='text-2xl font-bold my-2'>블로그 게시글 목록</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

