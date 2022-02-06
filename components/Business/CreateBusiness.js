import { useState } from "react";
import tw from "tailwind-styled-components";
import useForm from "../../lib/useForm";
import Form from "../styles/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { API_URL } from "../../config";

const Button = tw.button`uppercase text-sm h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800`;

// const GET_CATEGORIES = gql`
//   query GetCategory {
//     categories {
//       id
//       name
//     }
//   }
// `;
export default function CreateBusiness() {
  // const { loading, error, data } = useQuery(GET_CATEGORIES);
  // if (loading) return <p>Loading ...</p>;
  // if (error) return <p>error</p>;
  // const categories = data.categories;
  const { inputs, handleChange, resetForm } = useForm({
    name: "",
    description: "",
    address: "",
    phone: "",
    website: "",
    instagram: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

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

    // if not empty send post request
    const res = await fetch(`${API_URL}/businesses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });

    if (!res.ok) {
      toast.error("Something went wrong");
    } else {
      const business = await res.json();
      router.push(`/${business.slug}`);
    }
  };

  return (
    <div>
      {/* TODO: Handle loading state  */}
      <Form onSubmit={handleSubmit} disabled={loading} aria-busy={loading}>
        <fieldset className="bg-gray-100">
          <legend className="text-center p-2 rounded"> Add a business</legend>

          <label htmlFor="rating">Name</label>

          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="text-black w-full"
            value={inputs.name}
          />
          <label htmlFor="rating">Description</label>
          <input
            type="text"
            name="description"
            onChange={handleChange}
            className="text-black w-full"
            value={inputs.description}
          />
        </fieldset>
        <Button type="submit">post</Button>
        <ToastContainer />
      </Form>
    </div>
  );
}
