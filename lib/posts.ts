// lib/posts.ts

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
}

export interface Post extends PostMetadata {
  content: string;
}

// Dummy data
const POST_DATA: Post[] = [
  { slug: 'post-1', title: 'Post 1', date: '2023-01-01', content: 'This is the content of Post 1.' },
  { slug: 'post-2', title: 'Post 2', date: '2023-01-02', content: 'This is the content of Post 2.' },
  { slug: 'post-3', title: 'Post 3', date: '2023-01-03', content: 'This is the content of Post 3.' },
];

export async function getPosts(): Promise<PostMetadata[]> {
  // Replace this with your actual data fetching logic
  return POST_DATA.map(({ slug, title, date }) => ({ slug, title, date }));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = POST_DATA.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  return post;
}
