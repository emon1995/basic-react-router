import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl font-bold text-red-300 text-center">
        This is Post Page: {posts.length}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12">
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
