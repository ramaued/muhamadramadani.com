import Link from "next/link";
import React from "react";
import { Post } from "../utils/interface";

interface Props {
  post: Post;
}

const PostComponent = ({ post }: Props) => {
  return (
    <div className="text-primary border border-function bg-function p-8 mb-4 rounded-md hover:opacity-80 hover:shadow-md duration-500">
      <Link href={`/articles/${post?.slug?.current}`}>
        <h1>{post?.title}</h1>
      </Link>
    </div>
  );
};

export default PostComponent;
