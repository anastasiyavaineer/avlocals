import styled from "styled-components";

const NavStyles = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;

  justify-content: flex-end;
  a,
  button {
    display: flex;
    justify-content: end;
    padding: 1rem;
    text-transform: uppercase;
    /* color: ${({ theme }) => theme.dimtext}; */
    font-weight: 400;

    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: 0.4s ease-in-out;
    border-radius: 0.5rem;

    &:hover {
      /* text-shadow: 2px 2px 5px ${({ theme }) => theme.highlight}; */
    }
  }
`;

export default NavStyles;
