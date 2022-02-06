import qs from "qs";
import { useRouter } from "next/router";
import PageTitle from "../components/PageTitle";
import BusinessList from "../components/BusinessList";
import { API_URL } from "../config";

export default function SearchPage({ businesses }) {
  const router = useRouter();

  return (
    <>
      <PageTitle title="Search Results" />
      <h1>Search Results for {router.query.term}</h1>
      {businesses.length === 0 && <h3>No businesses to show</h3>}
      <BusinessList businesses={businesses} />
    </>
  );
}
export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { category_contains: term },
        { description_contains: term },
      ],
    },
  });
  const res = await fetch(`${API_URL}/businesses?${query}`);

  const businesses = await res.json();

  return {
    props: { businesses },
  };
}
