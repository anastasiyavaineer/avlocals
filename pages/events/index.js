import { API_URL } from "../../config";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../components/PageHero";

export default function EventsIndex({ events }) {
  return (
    <div class="max-w-6xl mx-auto">
      <PageHero title="upcoming events" />
      <div className="grid md:grid-cols-3 grid-cols-1">
        {events.map((evt) => (
          <div className="px-2 max-w-lg mx-auto rounded">
            <Link href={`/events/${evt.slug}`}>
              <a>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg">
                  <Image
                    alt="..."
                    src={evt.image ? evt.image.url : "/profile.jpg"}
                    width={400}
                    height={400}
                    placeholder="blur"
                    className="rounded-t"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <div>
                      <h1 className="text-xl font-bold">{evt.title}</h1>
                    </div>
                    <p className="text-md font-light">
                      {new Date(evt.date).toLocaleDateString("en-US")} @
                      {evt.time}
                    </p>
                  </blockquote>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);

  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
