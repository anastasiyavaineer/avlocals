import tw from "tailwind-styled-components";
import useForm from "../../lib/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { API_URL } from "../../config";
const Button = tw.button`uppercase text-sm h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800`;
export default function CreateReview({ business }) {
  const { inputs, handleChange, resetForm } = useForm({
    rating: "",
    text: "",
    business: business.id,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    // validation

    const hasEmptyFields = Object.values(inputs).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
    }

    const res = await fetch(`${API_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const review = await res.json();
      router.push(`/${business.slug}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="bg-gray-100">
          <legend className="text-center p-2 rounded">
            {" "}
            Leave a review for {business.name}
          </legend>

          <label htmlFor="rating" className="text-xs">
            Rating
          </label>

          <input
            type="text"
            name="rating"
            onChange={handleChange}
            className="text-black w-full"
            value={inputs.rating}
          />

          <label htmlFor="review" className="text-xs">
            Review
          </label>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            className="text-black w-full"
            value={inputs.text}
          />
        </fieldset>
        <Button type="submit">post</Button>
        <ToastContainer />
      </form>
    </div>
  );
}
