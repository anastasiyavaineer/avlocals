import { useContext } from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";
import {
  AiOutlineSketch,
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineMenu,
  AiCartIcon,
} from "react-icons/ai";

import { HiOutlineShoppingBag } from "react-icons/hi";
import DownshiftSearch from "./DownshiftSearch";

const Bag = styled(HiOutlineShoppingBag)`
  font-size: 1.5rem;
`;

const Login = styled(AiOutlineUser)`
  margin: 0 2px;
`;
export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className="bg-gray-200 dark:bg-gray-800 shadow-md z-10 fixed w-full pt-safe-top top-0 px-2 md:px-0">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between py-2">
          <h1 className="tracking-tighter text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-900">
            <Link href="/">AV</Link>
          </h1>
          <nav className="space-x-4 text-gray-700 dark:text-gray-200 flex">
            <Link href="/businesses">
              <a className="px-4 py-2 bg-yellow-300 font-bold text-sm dark:text-black rounded-md">
                All Listings
                {/* <Bag /> */}
              </a>
            </Link>
            {user ? (
              //if logged in

              <button
                onClick={() => logout()}
                className="px-4 py-2 bg-gray-300 font-bold text-sm dark:text-black rounded-md flex items-center"
              >
                <Login />
                Logout
              </button>
            ) : (
              //if logged out
              <Link href="/account/login">
                <a className="px-4 py-2 bg-gray-300 font-bold text-sm dark:text-black rounded-md flex items-center">
                  <Login />
                  Login
                </a>
              </Link>
            )}

            {/* <Link href="/events">
              <a>
                Events

              </a>
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
