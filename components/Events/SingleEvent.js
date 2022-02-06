export default function SingleEvent({ evt }) {
  return (
    <div className="py-80">
      <h1 className="text-black">{evt.name}</h1>
      {evt.description}
    </div>
  );
}
