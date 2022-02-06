import { useState } from "react";
import { useRouter } from "next/router";
import Downshift from "downshift";
import {
  DropDown,
  DropDownItem,
  SearchStyles,
} from "../components/styles/DropDown";
export default function Search() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
    setTerm("");
  };

  return (
    <div className="md:w-2/4 w-full px-4 ">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Businesses"
          className="rounded-md border-gray-200 bg-white text-sm w-full text-grey-800 dark:bg-gray-900 dark:text-white"
        />
      </form>
    </div>
  );
}
