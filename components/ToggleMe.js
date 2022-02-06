import useDarkMode from "use-dark-mode";
import { VscColorMode } from "react-icons/vsc";
import styled from "styled-components";

const CoolStyles = styled.div`
  button {
    outline: none;
    background: none;
    border: none;
  }
`;
const Cool = styled(VscColorMode)`
  font-size: 2rem;
`;
export default function ToggleMe() {
  // const darkmode = useDarkMode(true);
  return (
    <CoolStyles>
      <button onClick={darkmode.toggle} type="button" aria-label="toggle theme">
        <Cool />
      </button>
    </CoolStyles>
  );
}
