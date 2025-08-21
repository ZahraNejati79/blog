import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative aspect-video overflow-hidden">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          fill
          className="object-cover object-center hover:scale-110 duration-300 transition-all"
          alt={title}
        />
      </Link>
    </div>
  );
}
