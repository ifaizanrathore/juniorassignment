"use client";
import PostForm from '@/components/PostForm';

export default function CreatePostPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <PostForm mode="create" />
    </main>
  );
}