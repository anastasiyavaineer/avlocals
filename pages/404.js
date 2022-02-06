import styled from "styled-components";
import PageTitle from "../components/PageTitle";
import { RiErrorWarningLine } from "react-icons/ri";
const NotFoundStyles = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error {
    text-align: center;
    background: wheat;
    color: black;
    padding: 4rem;
    border-radius: 0.7rem;
  }
`;

const Nah = styled(RiErrorWarningLine)`
  font-size: 8rem;
`;

export default function NotFoundPage() {
  return (
    <NotFoundStyles>
      <PageTitle title="404 Not Found" />
      <div className="error">
        <Nah />
        <h1>OOPS...</h1>
        <p>We can't seem to find that page</p>
      </div>
    </NotFoundStyles>
  );
}
