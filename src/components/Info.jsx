import React from "react";
import styled from "styled-components";
// import { FaCopyright } from 'react-icons/fa'
import { BiCopyright } from "react-icons/bi";
const Info = () => {
  return (
    <InfoC className="bg-slate-700">
      <BiCopyright size={22} />
      <span>CSI-Kancheepuram.org - All right reserved</span>
    </InfoC>
  );
};

export default Info;

const InfoC = styled.div`
  display: flex;
  /* position: relative;
  bottom: 0; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 10vh;
  /* background-color: rgb(0,0,0,0.96); */
  color: #f5f5f5;
  span {
    margin-left: 7px;
  }
  font-family: poppins;
`;
