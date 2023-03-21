import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import "./hero.css";
import Header from "./Header";
import Info from "./Info";

const chiefGuest = () => {
  return (
    <Div>
      <LeftWrap>
        <img className="animate" src="/images/isro.avif" alt="" />
        {/* <h1>
                Mylswamy Annadurai
        </h1> */}
      </LeftWrap>
      <RightWrap>
        <h1>Mylswamy Annadurai</h1>
        <div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(
                "Former Director, ISRO Satelite Centre & Chandrayan Project."
              );
              typewriter.start();
            }}
          />
        </div>
        <Border className=" border-double border-[4px]  border-sky-600 animate " />
        <span className="text-justify animate">
          Mylswamy Annadurai is known by name Moon Man of India, he was born on
          July 2, 1958, Kodhawady, Tamil Nadu, India. He is an Indian aerospace
          engineer who held a number of posts with the Indian Space Research
          Organisation (ISRO), including the directorship (2015–18) of the U R
          Rao Satellite Centre (formerly the ISRO Satellite Centre). Following
          his early education in his native village, Annadurai in 1980 earned a
          bachelor’s degree in engineering from the Government College of
          Engineering in Coimbatore, Tamil Nadu.
        </span>

        {/* <h2>Former Director, ISRO Satelite Centre & Chandrayan Project.</h2> */}
      </RightWrap>
    </Div>
  );
};

export default chiefGuest;

const Div = styled.div`
  display: flex;
  margin-bottom: auto;
  font-family: poppins;
  padding-bottom: 35px;
  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    width: 100%;
    flex-direction: column;
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    width: 100%;
  }
`;

const LeftWrap = styled.div`
  width: 35%;
  display: flex;
  img {
    margin-top: 30px;
    margin-left: 30px;
    width: 480px;
    height: 300px;
    border-radius: 25px;
    /* display: flex; */
  }

  /* @media (max-width: 768px) and (orientation: portrait){ */

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    width: 100%;
    img {
      width: 250px;
      height: 230px;
      border-radius: 100%;
    }

    justify-content: center;
  }

  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    width: 40%;
    img {
      width: 220px;
      height: 200px;
      border-radius: 100%;
      margin-left: 40px;
    }
  }
  /*  */

  /* margin-right: 20px; */
`;

const RightWrap = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  /* justify-content: center; */
  /* align-items: center; */
  h1 {
    /* margin-left: 150px; */
    margin-top: 20px;
    color: rgb(2, 132, 199);
    font-weight: 600;
    font-size: 40px;
  }

  div {
    font-size: 20px;
    color: rgb(249, 115, 22);
    font-weight: 500;
  }
  /* div{
        margin-right: 0;
    } */

  span {
    margin-right: 50px;
    font-size: 23px;
  }

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    width: 100%;
    align-items: center;
    padding: 0;
    /* margin: 0;
        padding: 0; */
    /* justify-content: center; */
    h1 {
      margin: 0;
      margin-top: 15px;
      padding: 0;
      font-size: 23px;
    }

    div {
      /* font-size: 1px; */
      margin: 0;
      margin-bottom: 10px;
      padding: 0 17px;
      /* margin: 0; */
    }

    span {
      margin: 0;
      font-size: 18px;
      padding: 0 20px;
    }
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    width: 60%;
    /* align-items: center; */
    padding: 0;
    margin: 0;
    h1 {
      font-size: 30px;
    }

    span {
      font-size: 15px;
    }
  }
`;

const Border = styled.div`
  margin-right: 180px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media all and (max-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
    display: none;
  }
  @media all and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape) {
    margin-right: 55px;
    margin-top: 10px;
  }
`;
