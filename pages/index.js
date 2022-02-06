import CategoryList from "../components/CategoryList";
import BusinessList from "../components/BusinessList";
import { API_URL } from "../config";
import PageHero from "../components/PageHero";
import Hero from "../components/Hero";
import Discover from "../components/Discover";

export default function HomePage({ businesses, categories }) {
  return (
    <>
      <CategoryList categories={categories} />
      {/* <PageHero title="" /> */}
      <Discover />

      {/* <BusinessList businesses={businesses} /> */}
    </>
  );
}
export async function getStaticProps() {
  // const res = await fetch(`${API_URL}/businesses`);
  const res1 = await fetch(`${API_URL}/categories`);

  // const businesses = await res.json();
  const categories = await res1.json();

  return {
    props: { categories },
    revalidate: 1,
  };
}
