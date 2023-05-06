import React from "react";
import styled from "styled-components";
import { Pinterest } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <Pinterest />
        </IconButton>
      </LogoWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`;
