import styled, { keyframes } from "styled-components";
import tw from "tailwind-styled-components";

export const DropDown = tw.div`
  absolute
  w-full
  overscroll-auto
  border-b-1
  border-gray-200
  max-h-96
  `;

export const DropDownItem = tw.div`;
flex
items-center
w-full
bg-gray-100
dark:bg-gray-900
p-2
transition-all
duration-100

${(props) => (props.highlighted ? "pl-2" : null)}
${(props) =>
  props.highlighted ? "border-l-4 border-gray-800 dark:border-red-900" : null}

  img {
    mr-4
  }

`;

export const Input = tw.input`
w-full rounded dark:bg-gray-900
${(props) => (props.loading ? "dark:bg-red-400" : null)}
`;

// export const SearchStyles = tw.div`
// relative

//   z-50
//  input {
//    w-full
//    p-4
//    bg-blue-500
//  }
// `;
