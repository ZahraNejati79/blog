import Image from "next/image";
import { notFound } from "next/navigation";

export default async function SinglePost({ params }) {
  await new Promise((res) => setTimeout(res, 2000));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/post/slug/${params.postSlug}`
  );

  const { data } = await res.json();
  const { post } = data || {};

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.briefText}
        />
      </div>
      {/* {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} /> */}
    </div>
  );
}
