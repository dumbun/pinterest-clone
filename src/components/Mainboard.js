import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
function Mainboard() {
  return (
    <Wrapper>
      <Container>
        <Pin />
      </Container>
    </Wrapper>
  );
}

export default Mainboard;

const Wrapper = styled.div`
  margin-top: 15px;
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  background-color: white;
  display: flex;
  width: 80%;
`;
