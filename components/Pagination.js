import Link from "next/link";
import { PER_PAGE } from "../config/index";

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE);
  return (
    <>
      <div className=" w-96 mx-auto text-sm rounded-md">
        <div className="grid grid-cols-3 items-center  text-center">
          <div className="m-2">
            {page > 1 && (
              <Link href={`/businesses?page=${page - 1}`}>
                <a className="px-6 py-2  bg-gray-200 dark:bg-gray-800 rounded-md">
                  Prev
                </a>
              </Link>
            )}
          </div>

          <div>
            Page
            <p>{page}</p>
          </div>

          <div className="m-2">
            {page < lastPage && (
              <Link href={`/businesses?page=${page + 1}`}>
                <a className="px-6 py-2 bg-gray-200 rounded-md dark:bg-gray-800">
                  Next
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
