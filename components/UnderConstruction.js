import styled from "styled-components";
import { AiFillWarning } from "react-icons/ai";
import ToggleMe from "./ToggleMe";
const ConstructionStyles = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  background: orange;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    text-transform: uppercase;
    margin: 0;
  }
`;

const Nah = styled(AiFillWarning)`
  font-size: 10rem;
  color: red;
`;
export default function UnderConstruction() {
  return (
    <ConstructionStyles>
      <Nah /> <h4>under construction..</h4>
      <p> feel free to click around and break stuff </p>
      👇👇
      <ToggleMe />
    </ConstructionStyles>
  );
}
