import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";
import { Post } from "./utils/interface";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  const posts: Post[] = await getPosts();

  const postUrls = posts.map((post) => ({
    url: `https://muhamadramadani.com/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [
    {
      url: `https://muhamadramadani.com`,
      lastModified: new Date(),
    },
    {
      url: "https://muhamadramadani.com/articles",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
