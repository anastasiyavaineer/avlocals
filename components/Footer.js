import styled from "styled-components";
import TwToggle from "./TwToggle";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import ToggleMe from "./TwToggle";
export default function Footer() {
  return (
    <footer className="pt-24 pb-24 lg:pb-6 px-4">
      <header className="max-w-3xl mx-auto">
        <h1 className="text-3xl text-gray-800 dark:text-white font-bold">
          AV LOCALS{" "}
        </h1>
        <h2 className="text-sm">
          📍 Discover & Support <br /> Thriving Local Businesses 🪴
        </h2>
        <div className="py-4 flex text-2xl space-x-3">
          <a href="https://facebook.com/avlocals">
            <AiOutlineFacebook />
          </a>
          <a href="https://instagram.com/av.locals">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com/avlocals">
            <AiOutlineTwitter />
          </a>
        </div>
        <a href="mailto:hey@avlocals.com">
          <h4>hey@avlocals.com</h4>
        </a>
      </header>
      <main className="flex max-w-3xl mx-auto py-6">
        <nav className="space-x-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <TwToggle />
        </nav>
      </main>
      <div className="relative mx-auto text-center py-4 justify-center">
        {/* <TwToggle /> */}
        <h1 className="text-sm font-mono">
          Made with ❤️ {new Date().getFullYear()} - AVLocals.com
        </h1>
      </div>
    </footer>
  );
}
