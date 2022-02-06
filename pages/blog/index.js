import { API_URL } from "../../config";
import Link from "next/link";

export default function BlogIndex({ blogs }) {
  return (
    <div className="max-w-4xl mx-auto py-4">
      <h1>
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`}>
            <a className="bg-red-400">{blog.title}</a>
          </Link>
        ))}
      </h1>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blogs`);

  const blogs = await res.json();

  return {
    props: { blogs },
    revalidate: 1,
  };
}
