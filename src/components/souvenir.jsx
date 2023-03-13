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
      <Main>
        <Border> </Border>
        <H1>
          Here is an unbeatable opportunity to elevate the visibility and image
          of your organization!
        </H1>
        <Border></Border>
        <h1 className="">
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
        <Details className=" flex-col justify-center items-center">
          <span className="text-3xl flex justify-center items-center">
            {" "}
            The nominal rates for advertising in the Souvenir
          </span>
          <div className="mt-[40px] grid grid-flow-row grid-cols-2 rounded-3xl p-6 gap-x-16 gap-y-16 shadow-2xl shadow-slate-500">
            <div className="flex justify-center items-center ">
              Inside Front Cover{" "}
            </div>

            <div className="flex justify-center items-center text-red-600">
              {" "}
              Rs.20000
            </div>
            <div className="flex justify-center items-center "> Back Cover</div>
            <div className="flex items-center justify-center text-red-600  ">
              Rs.15000
            </div>

            <div className="flex justify-center items-center text-2xl">
              {" "}
              Inside Back Cover{" "}
            </div>
            <div className="flex items-center justify-center text-red-600  ">
              Rs.10000
            </div>
            <div className="flex justify-center items-center "> Full Page</div>
            <div className="flex items-center justify-center text-red-600  ">
              Rs.8000
            </div>
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
    height: 97vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 2px 2px 20px 2px;
    padding: 50px;
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
  margin-top: 50px;
`;

const Details = styled.div`
  color: #0c4a6e;
  font-family: poppins;
  font-weight: 600;
  font-style: italic;
  font-size: x-large;
  box-shadow: 2px 2px 20px 2px;
  height: 97vh;
  padding: 20px;
  text-shadow: 10px 10px 20px;
  /* padding-left: 20px; */
  padding-top: 40px;
`;
