export default function PageHero({ title }) {
  return (
    <div className="header flex items-center justify-center">
      <h1 className="font-pop text-center md:text-4xl text-3xl py-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-red-900 capitalize">
        {title}
      </h1>
    </div>
  );
}
