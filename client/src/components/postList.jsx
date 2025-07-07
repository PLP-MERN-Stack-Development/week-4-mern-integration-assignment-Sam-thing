import React from "react";

export default function PostList({ posts }) {
  if (!posts) {
    return <p className="text-gray-500 mt-4">Loading...</p>;
  }

  if (!posts.length) {
    return <p className="text-gray-500 mt-4">No posts found.</p>;
  }

  return (
    <div className="grid gap-4 mt-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-2xl bg-white/90 transition-shadow duration-200 hover:bg-blue-50 transition-transform duration-200 hover:-translate-y-1"
        >
          {post.featuredImage && (
            <div className="w-full flex justify-center mb-3">
              <img
                src={
                  post.featuredImage.startsWith("/uploads")
                    ? post.featuredImage
                    : `/uploads/${post.featuredImage}`
                }
                alt={post.title}
                className="rounded shadow max-h-48 object-cover"
              />
            </div>
          )}

          <h2 className="text-2xl font-extrabold text-blue-700 mb-2">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-3">
            {post.excerpt ? post.excerpt : `${post.content.slice(0, 100)}...`}
          </p>
          <div className="flex justify-between text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="category"></span>
              {post.category?.name || "Uncategorized"}
            </span>
            <span className="flex items-center gap-1">
              <span role="img" aria-label="views">👁</span>
              {post.viewCount} views
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
// This component renders a list of posts. If no posts are found, it displays a message. Each post shows the title, excerpt, category, and view count.npm install -D tailwindcss postcss autoprefixer
