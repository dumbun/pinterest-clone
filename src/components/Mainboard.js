import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import "./Mainboard.css";

function Mainboard(props) {
  let { pins } = props;
  return (
    <Wrapper>
      <Container className="mainboard__container">
        {pins.map((pin, index) => {
          let { urls } = pin;
          return <Pin key={index} urls={urls} />;
        })}
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
  column-gap: 10px;
  background-color: white;
  margin: 0 auto;
  height: 100%;
`;
