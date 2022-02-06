import { useRouter } from "next/router";
import EventMap from "../../components/EventMap";
import PageHero from "../../components/PageHero";
import { API_URL } from "../../config";

export default function SingleEventPage({ evt }) {
  const router = useRouter();

  return (
    <div>
      <PageHero title={evt.title} />

      {/* <h1 className="font-serif">{evt.title}</h1> */}
      <EventMap evt={evt} />
    </div>
  );
}
// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/events?slug=${slug}`);
//   const events = await res.json();

//   return {
//     props: {
//       evt: events[0],
//     },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for thet page
export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
