"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import RichTextEditor from "./RichTextEditor";
import type { Post } from "@/types/post";

type PostFormProps = {
  mode: "edit" | "create";
  post?: Post;
};

export default function PostForm({ mode, post }: PostFormProps) {
  const [title, setTitle] = useState(post?.title || "");
  const [body, setBody] = useState(post?.body || "");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload = { title, body };
    const url =
      mode === "edit"
        ? `https://jsonplaceholder.typicode.com/posts/${post?.id}`
        : "https://jsonplaceholder.typicode.com/posts";
    const method = mode === "edit" ? "PUT" : "POST";

    await fetch(url, {
      method,
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });

    router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <RichTextEditor value={body} onChange={setBody} />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        {mode === "edit" ? "Update Post" : "Create Post"}
      </button>
    </form>
  );
}
