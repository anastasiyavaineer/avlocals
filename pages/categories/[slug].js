import CategoryList from "../../components/CategoryList";
import BusinessList from "../../components/BusinessList";
import GoBack from "../../components/GoBack";
import { API_URL } from "../../config";

import PageHero from "../../components/PageHero";

export default function CategoriesPage({ category, allCat }) {
  const { businesses } = category;
  return (
    <>
      <CategoryList categories={allCat} />
      <section>
        <PageHero title={category.name} />

        {/* <Image src={category.logo.url} width="100" height="100" /> */}
        <BusinessList businesses={businesses} />
      </section>
    </>
  );
}

// tell next how many pages there are

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/categories`);
  const categories = await res.json();
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for thet page
export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_URL}/categories?slug=${slug}`);
  const data = await res.json();
  const category = data[0];

  const res1 = await fetch(`${API_URL}/categories`);
  const allCat = await res1.json();

  return {
    props: { category, allCat },
  };
}
