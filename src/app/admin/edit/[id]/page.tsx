// app/admin/edit/[id]/page.tsx
import PostForm from "@/components/PostForm";
import { getPost } from "@/lib/api";
import type { Post } from "@/types/post";

type EditPostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPostPage({ params }: EditPostPageProps) {
  const { id } = await params;
  const post: Post = await getPost(id);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <PostForm mode="edit" post={post} />
    </main>
  );
}
