import React from "react";
import styled from "styled-components";
const ud = () => {
  return (
    <UD>
      <span> Site Under Development </span>
    </UD>
  );
};

export default ud;

const UD = styled.div`
  span {
    color: red;
    font-family: mars;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: xx-large;
  font-weight: 700;
  /* background-image: url("/images/csilogo.png"); */
  animation: fade 1s linear forwards;
  @keyframes fade {
    0% {
      transform: translateX(-20px);
      opacity: 0%;
    }
    100% {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
`;
