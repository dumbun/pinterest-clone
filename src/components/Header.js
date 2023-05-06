import React, { useState } from "react";

import styled from "styled-components";
import {
  Pinterest,
  Search,
  Notifications,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import TextsmsIcon from "@mui/icons-material/Textsms";
import FaceIcon from "@mui/icons-material/Face";

function Header() {
  const [input, setInput] = useState("");
  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("this is the input", input);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <Pinterest />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>{" "}
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWapper>
        <SearchBarWrapper>
          <IconButton>
            <Search></Search>
          </IconButton>
          <form type="text">
            <input onChange={(e) => setInput(e.target.value)} type="text" />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWapper>
      <IconsWrapper>
        <IconButton>
          <Notifications></Notifications>
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDown />
        </IconButton>
      </IconsWrapper>
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

const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomePageButton = styled(HomeButtons)`
  background-color: black;

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const FollowingButton = styled(HomeButtons)`
  background-color: white;
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
    transition: 1.5s;
  }
  :hover {
    background-color: #e1e1e1;
  }
`;
const SearchWapper = styled.div`
  flex: 1;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border: none;
  border-radius: 50px;
  padding-left: 10px;
  form {
    display: flex;
    flex: 1;
  }
  form > input {
    font-size: 16px;
    border-radius: 50px;
    border: none;
    margin-left: 5px;
    background-color: transparent;
  }
  form > button {
    display: none;
  }
  input:focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div``;
