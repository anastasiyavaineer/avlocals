import styled from "styled-components";

const ItemStyles = styled.div`
  background: white;
  border: 1px solid var(--red);
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.04);
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  border-radius: 0.5rem;

  article {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    .content {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      h1 {
        padding: 0;
        margin: 0;
      }
    }
  }
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  p {
  }
  .buttonList {
    display: grid;
    width: 100%;
    /* border-top: 1px solid var(--black); */
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--lightGray);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`;

export default ItemStyles;
