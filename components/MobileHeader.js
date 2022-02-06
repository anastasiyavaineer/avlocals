import styled from "styled-components";
import GoBack from "./GoBack";

const MobStyles = styled.header`
  padding-top: env(safe-area-inset-top);
  position: fixed;
  background: ${({ theme }) => theme.body};
  width: 100%;
  z-index: 10000;
  text-align: center;
`;

const Logo = styled.h3`
  text-transform: uppercase;
  margin: 0;
  padding: 0;

  transform: skew(-7deg);
  letter-spacing: 0px;
  font-weight: 900;
  padding: 0.5rem 1rem;

  background: linear-gradient(
    121.57deg,
    ${({ theme }) => theme.background} 18.77%,
    ${({ theme }) => theme.highlight} 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function MobileHeader() {
  return (
    <MobStyles>
      <Logo>av locals</Logo>
    </MobStyles>
  );
}
