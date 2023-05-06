import React from "react";
import styled from "styled-components";

function Pin({ address }) {
  return (
    <Wrapper>
      <Container>
        <img
          src="https://images.unsplash.com/photo-1683220637474-29d3736704f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt=""
        />
      </Container>
    </Wrapper>
  );
}

export default Pin;

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  width: 236px;
  img {
    display: flex;
    width: 100%;
    cursor: zoom-in;
    border-radius: 15px;
    object-fit: cover;
  }
`;
