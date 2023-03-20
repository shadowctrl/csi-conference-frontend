import React from "react";
import styled from "styled-components";
const error = () => {
  return <Error>The site requested is not found</Error>;
};

export default error;

const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: mars;
  color: #ffaa00;
  font-size: xx-large;
  font-weight: 700;
  background-color: seashell;
`;
