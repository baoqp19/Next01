import Category from "@/components/Posts/Category";
import PostDetail from "@/components/Posts/PostDetail";
import PostList from "@/components/Posts/Posts";
import React from "react";

const page = ({ params }) => {
  if (!params.slug) {
    return <PostList />;
  }
  return (
    <div>
      <h1>Posts</h1>
      {params.slug[1] ? (
        <PostDetail post={params.slug[1]} />
      ) : (
        <Category Category={params.slug[0]} />
      )}
    </div>
  );
};

export default page;
