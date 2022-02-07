import DownshiftSearch from "./DownshiftSearch";

export default function Discover() {
  return (
    <div className="max-w-2xl mt-12 mx-auto px-4 flex flex-col justify-center rounded-md">
      <div className="space-y-3">
        {/* <h1 className="text-5xl font-pop font-extrabold text-transparent bg-clip-text bg-gradient-to-br dark:from-gray-300 dark:to-white from-gray-800 to-blue-700 capitalize">
          Discover
        </h1>
        <p className="font-sean text-gray-800 dark:text-white">
          📍 Thriving Local Businesses 🪴
        </p> */}
      </div>

      <DownshiftSearch />
    </div>
  );
}
