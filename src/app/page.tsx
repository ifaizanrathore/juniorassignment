import Link from "next/link";
import { getPosts } from "@/lib/api";
import type { Post } from "@/types/post";

export default async function HomePage() {
  const posts: Post[] = await getPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        📝 Welcome to the Blog
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group block rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {post.body.slice(0, 120)}...
            </p>
            <div className="mt-4 text-sm font-medium text-primary underline opacity-0 group-hover:opacity-100 transition duration-200">
              Read more →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
