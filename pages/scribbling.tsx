import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { PostMetadata, getPosts } from '../lib/posts';

interface ScribblingProps {
  posts: PostMetadata[];
}

const Scribbling: React.FC<ScribblingProps> = ({ posts }) => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Scribblings
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-4xl mx-auto pt-20">
          {posts.map((post: PostMetadata) => (
            <div className="p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 mb-8" key={post.slug}>
              <h1 className="text-2xl font-semibold">
                <Link href={`/posts/${post.slug}`}>
                  {post.title}
                </Link>
              </h1>
              <p className="text-gray-600 dark:text-gray-400">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Scribbling;