import styled from "styled-components";

import {
  AiOutlineSketch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";

import Link from "next/link";

const Discover = styled(AiOutlineSketch)`
  font-size: 1.5rem;
`;
const Favorites = styled(AiOutlineHeart)`
  font-size: 1.5rem;
`;

const Me = styled(AiOutlineUser)`
  font-size: 1.5rem;
`;
const Search = styled(AiOutlineSearch)`
  font-size: 1.5rem;
`;

export default function MobileNav() {
  return (
    <div className="">
      <nav className="fixed bottom-0 inset-x-0 bg-gray-100 dark:bg-gray-900 flex lg:hidden justify-between max-w-2xl mx-auto rounded-3xl z-50">
        <Link href="/">
          <a className="w-full h-full p-4 text-center flex flex-col items-center text-xs">
            <Search /> Discover
          </a>
        </Link>

        <Link href="/favs">
          <a className="w-full  p-4 text-center flex flex-col items-center text-xs">
            <Favorites />
            Favorites
          </a>
        </Link>

        <Link href="/account/login">
          <a className="w-full  p-4 text-center flex flex-col items-center text-xs">
            <Me />
            Me
          </a>
        </Link>
      </nav>
    </div>
  );
}
