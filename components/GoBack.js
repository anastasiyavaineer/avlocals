import { useRouter } from "next/router";

import styled from "styled-components";
const Back = styled.span``;
export default function GoBack() {
  const router = useRouter();

  return <Back onClick={() => router.back()}>Go back</Back>;
}
