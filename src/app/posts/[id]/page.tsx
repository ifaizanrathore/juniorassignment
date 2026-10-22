import { getPost } from "@/lib/api";

type PostDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PostDetails({ params }: PostDetailsProps) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div className="prose" dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
