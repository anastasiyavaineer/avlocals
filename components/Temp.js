import styled from "styled-components";
const TempStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100vh;
  h1,
  h4 {
    margin: 0;
  }
`;
export default function Temp() {
  return (
    <TempStyles>
      <h4>Coming soon...</h4>
      <h1>AV LOCALS </h1>

      <a href="https://instagram.com/av.locals">
        Follow the build process on Instagram
      </a>
    </TempStyles>
  );
}
