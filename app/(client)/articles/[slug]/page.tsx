import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: Params): Promise<Metadata | undefined> {
  const post: Post = await getPost(params?.slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: "id_ID",
      url: `https://muhamadramadani.com/${params.slug}`,
      siteName: "Muhamad Ramadani",
    },
  };
}

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  tags[]-> {
    _id,
    slug,
    name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  const post: Post = await getPost(params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-6 w-full mt-10 h-screen">
      <div className="text-center">
        <h2 className="mb-4 font-bold uppercase text-function hover:opacity-80">
          <Link href="/articles">Articles</Link>
        </h2>
        <h1 className="mb-2 font-bold text-3xl">{post?.title}</h1>
        <span className="text-sm">
          {new Date(post?.publishedAt).toDateString()}
        </span>
      </div>
      <div className="mt-6">
        <PortableText value={post.body} components={myPortableTextComponents} />
      </div>
      <div className="mt-6 h-20">
        <span className="text-sm mr-1 italic">tag:</span>
        {post?.tags?.map((tag) => (
          <span className="text-sm text-function font-bold lowercase border p-1 hover:opacity-80">
            #{tag.name}
          </span>
        ))}
      </div>
    </main>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image src={urlFor(value).url()} alt="Article" width={700} height={700} />
    ),
  },
};
