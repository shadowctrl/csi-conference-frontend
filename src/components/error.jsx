import React from "react";
import styled from "styled-components";
const error = () => {
  return (
    <Error>
      {" "}
      <span className="rainbow">The site requested is not found</span>{" "}
    </Error>
  );
};

export default error;

const Error = styled.div`
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
`;
