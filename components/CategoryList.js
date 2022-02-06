import Link from "next/link";

export default function CategoryList({ categories = [] }) {
  return (
    <nav className="flex md:justify-center md:max-w-4xl mx-auto py-6 w-full space-x-6 overflow-x-scroll sm:overflow-x-hidden">
      {categories &&
        categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <a className="text-xs flex flex-col justify-center text-center text-gray-700 dark:text-gray-200 uppercase">
              {category.name}
            </a>

            {/* <img src={category.logo.url} alt={category.name} /> */}
          </Link>
        ))}
    </nav>
  );
}
