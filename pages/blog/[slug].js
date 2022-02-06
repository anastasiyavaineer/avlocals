import { API_URL } from "../../config";
import Reactmarkdown from "react-markdown";
export default function BlogPage({ blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <Reactmarkdown src={blog.content} />
    </div>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/blogs?slug=${slug}`);
  const blogs = await res.json();

  return {
    props: {
      blog: blogs[0],
    },
  };
}
