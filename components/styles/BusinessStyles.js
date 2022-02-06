import styled from "styled-components";

import tw from "tailwind-styled-components";

const BusinessItemStyles = styled.article`
  padding-bottom: 1rem;
  position: relative;
  border-radius: 0.5rem;

  a {
    text-decoration: none;
   
  }

  }
  img {
    width: 100%;

    object-fit: cover;

    cursor: pointer;
  }
  
`;

const Title = styled.h1`
  transform: skew(-7deg);
  letter-spacing: 0px;
  font-weight: 900;
  margin: 0;
  font-size: 1.6rem;
  text-align: center;
`;

const Badge = styled.small`
  max-width: 200px;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;

  font-weight: 600;

  text-transform: uppercase;
`;

export { BusinessItemStyles, Title, Badge };
