import Head from "next/head";
import BusinessList from "../../components/BusinessList";
import Pagination from "../../components/Pagination";
import { API_URL, PER_PAGE } from "../../config/index";
export default function BusinessesPage({ businesses, page, total }) {
  return (
    <>
      <Head>
        <title>AVLocals - All Businesses page {page} </title>
      </Head>
      <div className="mt-20">
        <Pagination page={page} total={total} />
        <BusinessList businesses={businesses} />
        <Pagination page={page} total={total} />
      </div>
    </>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/businesses/count`);
  const total = await totalRes.json();

  // Fetch businesses
  const bizRes = await fetch(
    `${API_URL}/businesses?_sort=name:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const businesses = await bizRes.json();

  return {
    props: { businesses, page: +page, total },
  };
}
