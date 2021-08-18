import React from "react";
import styled from "styled-components";
import { primaryColor, dayBackground } from "../ui/variaveis";
import bg from "../../assets/img/bg.svg";
import Header from "../Header";
import Container from "../Container";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${dayBackground};
  background-image: url(${bg});
  background-size: cover;
  background-position: center center;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBox = styled.div`
  width: 800px;
  height: 580px;
  background-color: ${dayBackground};
  border-radius: 20px;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
`;

export default function App() {
  return (
    <Wrapper>
      <StyledBox>
        <Header>
        todo: app
        </Header>
        <Container/>

      </StyledBox>
    </Wrapper>
  );
}
