import React from "react";
import { useEffect, useState } from "react";
import { postService } from "../services/api";
import CategoryFilter from "../components/categoryFilter";
import PostList from "../components/postList";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAllPosts().then((data) => {
      setPosts(data.posts || []);
    });
  }, []);

  const handleCategoryChange = async (categoryId) => {
    if (!categoryId) {
      postService.getAllPosts().then((data) => setPosts(data.posts || []));
    } else {
      postService.getPostsByCategory(categoryId).then((data) => setPosts(data.posts || []));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col">
      <header className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white py-6 shadow-lg">
        <div className="max-w-3xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold flex items-center gap-2 tracking-tight drop-shadow">
            <span role="img" aria-label="blog"></span> MERN Blog
        </h1>
        <span className="text-base opacity-90 font-semibold">Welcome!</span>
      </div>
    </header>
    <main className="flex-1 flex items-center justify-center">
      <div className="w-full max-w-3xl p-4">
        <div className="mb-8">
          <CategoryFilter onSelect={handleCategoryChange} />
        </div>
        <PostList posts={posts} />
      </div>
    </main>
    <footer className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 text-white text-center py-3 mt-8 shadow-inner">
      <span className="text-xs tracking-wide">© {new Date().getFullYear()} MERN Blog </span>
    </footer>
    <div className="bg-red-500 text-white p-4">If this is red, Tailwind is working!</div>
    </div>
  );
}