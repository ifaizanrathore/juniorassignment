"use client";

import { usePosts } from "@/lib/api";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Post } from "@/types/post";

export default function AdminDashboard() {
  const { data: posts, isLoading } = usePosts();

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link href="/admin/create">
          <Button>Create New Post</Button>
        </Link>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {posts?.map((post: Post) => (
            <li key={post.id} className="border p-4 rounded">
              <h2 className="font-semibold">{post.title}</h2>
              <div className="mt-2 space-x-4">
                <Link href={`/admin/edit/${post.id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
