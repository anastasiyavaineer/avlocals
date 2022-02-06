import SingleBusiness from "../components/SingleBusiness";
import { API_URL } from "../config";

export default function SingleBusinessPage({ business }) {
  return (
    <div>
      <SingleBusiness business={business} />
    </div>
  );
}

// tell next how many pages there are

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/businesses`);
//   const businesses = await res.json();
//   const paths = businesses.map((business) => ({
//     params: { slug: business.slug },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// // for each individual page: get the data for thet page
// export async function getStaticProps({ params: { slug } }) {
//   const res = await fetch(`${API_URL}/businesses?slug=${slug}`);
//   const businesses = await res.json();

//   return {
//     props: {
//       business: businesses[0],
//     },
//   };
// }

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/businesses?slug=${slug}`);
  const businesses = await res.json();

  return {
    props: {
      business: businesses[0],
    },
  };
}
