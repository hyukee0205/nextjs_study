import { readFile } from 'fs/promises';
import path from 'path'
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export type PostData = Post & {
  content: string
  // index: number;
  next: Post | null;
  prev: Post | null;
};

export async function getFeaturePosts(): Promise<Post[]> {
  return getAllPosts()
    .then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturePosts(): Promise<Post[]> {
  return getAllPosts()
    .then((posts) => posts.filter((post) => !post.featured));
}

export const getAllPosts = cache(async () => {
  console.log('getAllPosts');
  const filePath = path.join(process.cwd(), 'data', 'posts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>((data) => JSON.parse(data))
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
})

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`);

  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  
  if (!post) throw new Error(`${fileName}에 대한 해당 포스트를 찾을 수 없음`);
  
  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null;
  const prev = index < posts.length -1 ? posts[index + 1] : null;

  const content = await readFile(filePath, 'utf-8');



  return {...post, content, next, prev};
}



