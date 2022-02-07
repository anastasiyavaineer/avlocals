import Link from "next/link";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
export default function Business({ business }) {
  const url = buildUrl(`${business.profilepic.hash}`, {
    cloud: {
      cloudName: "swdb",
    },
  });

  const tagString = business.tags;

  return (
    <article className="rounded w-full my-4 shadow -z-1">
      <Link href={`/${business.slug}`}>
        <a className="flex">
          <div className="relative h-20 w-20 md:h-32 md:w-32">
            <Image
              src={url}
              alt={business.name}
              layout="fill"
              placeholder="blur"
              className="rounded object-cover "
            />
          </div>
          <div className="flex flex-col justify-center pl-4">
            <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
              {business.name}
            </h1>
            <small className="text-gray-800 dark:text-gray-200">
              Learn More
            </small>
            {/* <div>{typeof tagArray}</div>
            <div>{tagString}</div> */}
          </div>
        </a>
      </Link>
    </article>
  );
}
