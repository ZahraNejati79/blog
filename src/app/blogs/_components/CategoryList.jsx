import Link from "next/link";

export default async function CategoryList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();
  console.log("categories", categories);

  return (
    <ul className="space-y-4">
      <li className="">
        <Link href={`/blogs/`}>همه</Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className="">
          <Link href={`/blogs/category/${category.slug}`}>
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
