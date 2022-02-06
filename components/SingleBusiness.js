import { buildUrl } from "cloudinary-build-url";
import Image from "next/image";
import BusinessMap from "./BusinessMap";
import Head from "next/head";
import CreateReview from "./Reviews/CreateReview.js";
import ReadReview from "./Reviews/ReadReview";
import { FiInstagram, FiPhoneOutgoing, FiTablet } from "react-icons/fi";
import Menu from "./Menu";

import styled from "styled-components";
import Reactmarkdown from "react-markdown";

const IG = styled(FiInstagram)`
  font-size: 1.5rem;
  margin-bottom: 3px;
`;

const Phone = styled(FiPhoneOutgoing)`
  font-size: 1.5rem;
  margin-bottom: 3px;
`;

const Site = styled(FiTablet)`
  font-size: 1.5rem;
  margin-bottom: 3px;
`;

export default function Business({ business }) {
  const {
    name,
    category,
    description,
    images,
    profilepic,
    reviews,
    bizmenu,
    instagram,
    phone,
    website,
  } = business;

  return (
    <>
      <Head>
        <title>AVLocals - {name}</title>
      </Head>
      <div className="w-full grid grid-cols-4 relative">
        {images.map((image, index) => {
          const url = buildUrl(`${image.hash}`, {
            cloud: {
              cloudName: "swdb",
            },
          });
          return (
            <Image
              key={index}
              src={url}
              height={500}
              width={500}
              alt={image.name}
            />
          );
        })}
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-20 bg-black "
        ></span>
      </div>

      <div>
        <div className="select-none">
          <header className="">
            <div className="flex justify-center">
              <div className="lg:-mt-32 md:-mt-24 -mt-16">
                <div className="relative lg:w-60 lg:h-60 md:w-40 md:h-40 w-32 h-32">
                  <Image
                    src={profilepic.url}
                    alt={name}
                    className="rounded-full h-auto align-middle border-none"
                    layout="fill"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-center md:text-4xl text-3xl font-pop font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-900 capitalize pt-4">
              {name}
            </h1>
          </header>

          <main className="py-4 max-w-5xl mx-auto px-6 flex flex-col justify-center items-center space-y-5">
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none  bg-gray-600 rounded text-white">
              {category.name}
            </span>

            <div className="flex space-x-8 items-center space-evenly p-2 h-16">
              {phone && (
                <a
                  className="flex flex-col justify-center items-center text-xs"
                  href={`tel:${phone}`}
                >
                  <Phone />
                  Call
                </a>
              )}
              {instagram && (
                <a
                  className="flex flex-col justify-center items-center text-xs "
                  href={`https://instagram.com/${instagram}`}
                >
                  <IG />
                  IG
                </a>
              )}

              {website && (
                <a
                  href={website}
                  className="flex flex-col justify-center items-center text-xs"
                >
                  <Site />
                  Website
                </a>
              )}
            </div>
            {/* MENU */}

            <div>
              <h1 className="py-4">{description}</h1>
            </div>
            {bizmenu?.menu.map((menustuff, index) => {
              return (
                <div>
                  <Menu key={index} menu={menustuff} />
                </div>
              );
            })}

            {/* <Reactmarkdown src={description} />  */}
            {/* MAP */}
            <BusinessMap business={business} />
            {/* <div className="py-12 px-2">
              <h1 class="text-xl font-bold">Reviews</h1>
              {reviews.map((review) => (
                <ReadReview review={review} />
              ))}
              {user && <CreateReview business={business} />}
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
}
