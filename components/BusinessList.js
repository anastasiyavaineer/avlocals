import Business from "./Business";

export default function BusinessList({ businesses }) {
  return (
    <div className="max-w-4xl mx-auto justify-center p-2">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}
