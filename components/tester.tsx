import React from "react";
import userData from "../constants/data";

import type {
  GetStaticPropsResult,
  InferGetStaticPropsType,
  NextPage,
} from "next";

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ posts: Post[] }>
> {
  return { props: { posts: allPosts } };
}

export default function Blogs() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Blogs
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
        <ul role="list" class="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-500">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ title, url, number }) => {
  return (
    <a href={url} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
         <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
