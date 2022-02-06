import styled, { keyframes } from "styled-components";

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  /* box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02); */

  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;

    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    font-family: inherit;
    box-sizing: border-box;

    &:focus,
    &:hover {
      outline: 0;
      border-color: var(--black);
    }
  }
  button,
  input[type="submit"] {
    width: auto;
    background: var(--red);
    color: white;
    border: 0;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 0.2rem;
    cursor: pointer;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: "";
      display: block;
      background-image: linear-gradient(
        to right,
        var(--red) 0%,
        var(--offWhite) 50%,
        var(--red) 100%
      );
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;
