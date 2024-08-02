import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Articles",
  description: "Sebuah blog informasi teknologi, dan lainnya",
};

async function getPosts() {
  const query = `
  *[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  }
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function Article() {
  const posts: Post[] = await getPosts();

  return (
    <main className="mx-auto max-w-2xl px-6 w-full mt-10 md:mt-20">
      <h2 className="mb-10 font-bold text-center text-4xl">Articles</h2>
      <div className="font-bold text-function">
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </main>
  );
}
