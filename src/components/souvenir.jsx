//hello
import React from "react";
import styled from "styled-components";
import { Head, Header, Info } from "../components";
const souvenir = () => {
  return (
    <div className="scroll-lock">
      <div className="snap-start">
        <Header />
      </div>
      <Main className="">
        <Border> </Border>
        <H1>
          Here is an unbeatable opportunity to elevate~ the visibility and image
          of your organization!
        </H1>
        <Border></Border>
        <h1 className="snap-start">
          The International Conference NGTCA 2023 intends to bring out a
          Souvenir to commemorate the occasion. The Souvenir is expected to be
          circulated to a wide spectrum of audience from all the nine Region 7
          Chapters and Cochin and all the Student Branches associated with them.
          {/* <br /> <br /> <br /> */}
          The audience is expected to exceed 3000 and covers a diverse profile
          of academicians, research scholars, industry professionals, officers
          of various premier government bodies and students.
        </h1>
        <Border></Border>
        <Details className="snap-start flex-col">
          <span className="text-3xl">
            {" "}
            The nominal rates for advertising in the Souvenir are as follows:{" "}
          </span>
          <div className="mt-[20px] grid grid-flow-row grid-cols-2 rounded-3xl p-6 gap-x-20 ">
            <div className="text-left">
              {" "}
              <img
                src="/images/frontpage.jpg"
                className="w-[20vh] h-[30vh] rounded-xl ml-[40px]"
              />
              <span className=" text-red-600"> Inside Front Cover </span>
            </div>
            <div> Rs.20000</div>
            <div> Back Cover</div>
            <div> Rs. 15000</div>
            <div> Full Page </div>
            <div> Rs.8000 </div>
          </div>
        </Details>
        <Border />
        <h1 className="snap-start"> </h1>
      </Main>
    </div>
  );
};

export default souvenir;

const Main = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  h1 {
    /* margin-top: 50px; */
    color: #0c4a6e;
    font-family: poppins;
    font-weight: 600;
    font-style: italic;
    font-size: x-large;
    /* scroll-snap-align: start; */
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 20px 2px;
    /* padding: 10px; */
    text-shadow: 10px 10px 20px;
  }
`;
const H1 = styled.div`
  font-family: "mars";
  font-size: x-large;
  color: brown;
  text-align: center;
  font-weight: 900;
  padding: 15px;
  box-shadow: 2px 2px 20px 2px;
  animation: fadey 1s linear forwards;
  height: 97vh;
  display: flex;
  align-items: center;
  text-shadow: 10px 10px 10px;

  @keyframes fadey {
    0% {
      transform: translateY(10px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 100%;
    }
  }
`;

const Border = styled.div`
  border-style: dashed;
  border-color: rgb(147 197 253);
  padding-top: 10px;
  border-width: 0px;
  scroll-snap-align: start;
`;

const Details = styled.div`
  color: #0c4a6e;
  font-family: poppins;
  font-weight: 600;
  font-style: italic;
  font-size: x-large;
  box-shadow: 2px 2px 20px 2px;
  height: 90vh;
  padding: 10px;
  text-shadow: 10px 10px 20px;
  padding-left: 50px;
  padding-top: 30px;
`;
