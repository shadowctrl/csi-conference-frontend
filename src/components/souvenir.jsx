//hello
import { React, useEffect } from "react";
import styled from "styled-components";
import { Head, Header, Info } from "../components";
import "./souvenir.css";

const souvenir = () => {
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px",
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("zoomin");
        if (!entry.isIntersecting) {
          entry.target.classList.remove("zoomin");
          // entry.target.classList.add("fadeRL");
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);

    const divs = document.querySelectorAll(`div.grid,span.grid_head`);

    divs.forEach((div) => {
      observer.observe(div);
    });
  });

  return (
    <div className="scroll-lock">
      <div className="snap-start">
        <Header />
      </div>
      <Main>
        <Border> </Border>
        <H1 className="H1">
          Here is an unbeatable opportunity to elevate the visibility and image
          of your organization!
          {/* <H2 className="p2"> */}
          {/* <img src="/images/up.svg" className="absolute w-[100%] h-[50%]"></img> */}
          <span>
            {" "}
            The International Conference NGTCA 2023 intends to bring out a
            Souvenir to commemorate the occasion. The Souvenir is expected to be
            circulated to a wide spectrum of audience from all the nine Region 7
            Chapters of Chennai, Kancheepuram, Trivandrum, Sivakasi, Coimbatore,
            Trichy, Vellore, Salem and Cochin and all the Student Branches
            associated with them. The audience is expected to exceed 3000 and
            covers a diverse profile of academicians, research scholars,
            industry professionals, officers of various premier government
            bodies and students.
          </span>
          {/* </H2> */}
        </H1>
        <Border></Border>
        <Details className=" flex-row justify-center items-center ">
          <div className="md:mt-[100px]">
            <span className="text-3xl flex justify-center items-center grid_head">
              {" "}
              The nominal rates for advertising in the Souvenir
            </span>
            <Grid className="zoomin mt-[40px] grid grid-flow-row grid-cols-2 rounded-3xl p-8 gap-y-16 md:ml-[200px] md:mr-[200px] ">
              <div className="flex justify-center items-center ">
                Inside Front Cover{" "}
              </div>

              <div className="flex justify-center items-center text-red-600">
                {" "}
                Rs.20000
              </div>

              <div className="flex justify-center items-center text-2xl">
                {" "}
                Inside Back Cover{" "}
              </div>
              <div className="flex items-center justify-center text-red-600  ">
                Rs.10000
              </div>
              <div className="flex justify-center items-center ">
                {" "}
                Back Cover
              </div>
              <div className="flex items-center justify-center text-red-600  ">
                Rs.15000
              </div>
              <div className="flex justify-center items-center ">
                {" "}
                Full Page
              </div>
              <div className="flex items-center justify-center text-red-600  ">
                Rs.8000
              </div>
            </Grid>
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
`;
const H1 = styled.div`
  font-family: "mars";
  font-size: x-large;
  color: brown;
  text-align: center;
  font-weight: 900;
  padding: 0px 40px;
  box-shadow: 2px 2px 20px 2px;
  animation: fadey 2s linear forwards;
  height: 97vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
  text-shadow: 10px 10px 10px;
  margin: 0px 0px 20px 0px;

  @keyframes fadey {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 100%;
    }
  }

  span {
    font-family: "poppins";
    font-size: x-large;
    color: #0c4a6e;
    text-align: justify;
    font-weight: 450;
    padding: 15px;
    box-shadow: 0px 2px 30px slategray;
    border-radius: 10px;
    text-shadow: 0px 0px 0px;
    padding: 25px;
    animation: fadey 2s linear forwards;
  }
`;

// const H2 = styled.div`
//   color: #0c4a6e;
//   font-family: poppins;
//   font-weight: 600;
//   font-style: italic;
//   font-size: x-large;
//   /* scroll-snap-align: start; */
//   height: 97vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: justify;
//   box-shadow: 2px 2px 20px 2px;
//   text-align: justify;
//   /* padding: 50px; */
//   padding: 0px 200px;
//   text-shadow: 10px 10px 20px;
// `;

const Border = styled.div`
  border-style: dashed;
  border-color: rgb(147 197 253);
  padding-top: 10px;
  border-width: 0px;
  scroll-snap-align: start;
  /* margin-top: 2px; */
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
  /* padding-top: 40px; */
`;

const Grid = styled.div`
  box-shadow: 2px 10px 60px slategray;
  div {
  }
`;
