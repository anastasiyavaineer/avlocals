export default function Menu({ menu }) {
  return (
    <div className="w-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-extrabold uppercase text-2xl">{menu.name}</h1>
        <hr />
        {menu.item.map((i) => (
          <div className="flex justify-between my-4">
            <div className="flex flex-col w-3/4">
              <h1 className="uppercase font-bold">{i.name}</h1>
              <p>{i.description}</p>
            </div>
            <div className="yeet">
              <p>{i.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
