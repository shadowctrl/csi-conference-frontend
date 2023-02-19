import styled from "styled-components";
// import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
// import { IoLinkSharp } from 'react-icons/iolink'
import { RiLinksFill, RiCloseCircleFill } from "react-icons/ri";
// import { IoBody } from 'react-icons/io'
import { BiBody } from "react-icons/bi";
import { MdOutlineGroupAdd } from "react-icons/md";
import Typewriter from "typewriter-effect";
import Popup from "./Popup";

import { useState } from "react";

import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu } from "react-icons/gi";

// import { GrClose } from 'react-icons/gr'

// import Popup from './components/Popup';

const Header = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  const [buttonPopup, setButtonPopup] = useState(true);

  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <HeaderC className="bg-slate-700">
      <TopNav>
        <Logo className="">
          <a href="#">
            <img src="/images/csilogo.png" />
          </a>
        </Logo>

        <Heading className="font-poppins">
          <h1 className="">COMPUTER SOCIETY OF INDIA</h1>
          <span>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Region 7 Chapters");
                typewriter.start();
              }}
            />
          </span>
        </Heading>
      </TopNav>
      <BottomNav style={{ color: "#f5f5f5" }}>
        <li>
          <AiFillHome size={25} />
          <a href="#">
            <button onClick={() => setButtonPopup(true)}>Home</button>
          </a>
        </li>
        <li>
          <MdGroups size={30} />
          <a href="#ac">About Conference</a>
        </li>
        <li>
          <BiBody size={25} />
          <a href="#ob">Organising body</a>
        </li>
        <li>
          <MdOutlineGroupAdd size={30} />
          <a href="#cm">Committee members</a>
        </li>

        <li>
          <a href="#au">About Us</a>
        </li>
      </BottomNav>
      <BottomNavPh>
        <Button onClick={() => setBurgerStatus(true)}>
          <GiHamburgerMenu size={25} />
        </Button>
        {/* <button onClick={ () => setBurgerStatus(true)}>
          <GiHamburgerMenu size={25} />
        </button> */}
        <BurgerNav
          show={burgerStatus}
          className="rounded-xl bg-gray-gradient sidebar"
        >
          <CloseBgNav onClick={() => setBurgerStatus(false)}>
            <RiCloseCircleFill size={25} />
          </CloseBgNav>
          <li>
            <AiFillHome size={25} />
            <a href="#">
              <button onClick={() => setButtonPopup(true)}>Home</button>
            </a>
          </li>
          <li>
            <MdGroups size={30} />
            <a href="#ac">About Conference</a>
          </li>
          <li>
            <BiBody size={25} />
            <a href="#ob">Organising body</a>
          </li>
          <li>
            <MdOutlineGroupAdd size={30} />
            <a href="#cm">Committee members</a>
          </li>
          <li>
            {/* <IoLinkSharp size={30}/> */}
            <RiLinksFill size={27} />
            <a href="#il">Important links</a>
          </li>
        </BurgerNav>
      </BottomNavPh>
      <Popup trigger={buttonPopup}>
        <button onClick={() => setButtonPopup(false)}>
          <GrClose size={25} />
        </button>
        <img src="/images/csi-broch1.png" />
        {/* <img src='/images/csi-broch2' /> */}
      </Popup>
    </HeaderC>
  );
};

export default Header;

const HeaderC = styled.div`
  width: 100vw;
  height: 30vh;
  margin-top: 0;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  font-family: poppins;
  @media (max-width: 768px) {
    height: 17vh;
  }
  /* position: absolute; */

  /* z-index: ; */
`;

const TopNav = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 200px;
  /* height: 80%; */

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    height: 78%;
    /* background-color: black; */
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px 20px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    width: 80px;
    height: 80px;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  color: #f5f5f5;
  /* margin-top: 40px; */
  h1 {
    /* color:rgb(56, 189, 248);
                @media(max-width: 768px){ */
    /* color: #f5f5f5; */
    font-weight: 800;
    font-size: 35px;
  }
  span {
    /* color: #f5f5f5; */
    font-size: 22px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    margin-left: 15px;
    h1 {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  /* height: 22%; */
  position: relative;
  /* justify-content: space-between; */
  /* padding: 5px 0; */
  /* padding-left: 420px; */
  padding-left: 250px;
  padding-top: 20px;

  li {
    margin-right: 80px;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    align-items: center;
    /* @media(max-width: 768px){
          display: none;
        } */
    &:hover {
      background-color: rgba(12, 13, 16, 1);
      border-radius: 10px;
      padding: 5px 7px;
    }
  }

  a {
    text-decoration: none;
    margin-left: 5px;
    margin-top: 5px;
    /* color: rgb(192,192,192); */
    color: rgba(189, 230, 253, 1);
    font-weight: 700;
    font-size: 20px;

    /* @media(max-width: 768px){
          display: none;
        } */
  }

  @media (max-width: 768px) {
    display: none;
    padding: 0px;
    height: 0%;
    /* justify-content: left; */
  }
`;

const Button = styled.button`
  @media (min-width: 768px) {
    display: none;
  }
  z-index: 1;
  padding: 0px;
  margin: 0px;
  position: absolute;
  right: 5px;
  top: 0.5px;
  cursor: pointer;
  z-index: 0;
  color: #f5f5f5;
  margin-right: 2px;
  /* padding-bottom: 2px; */
`;

const CloseBgNav = styled.button`
  margin-left: 180px;
  z-index: 1;
  margin-top: 5px;
  cursor: pointer;
`;
const BottomNavPh = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  position: relative;
  /* background-color: black; */
  a {
    font-size: 13px;
    margin-left: 5px;
    font-weight: 500;
  }
  li {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    margin-left: 7px;
  }
  z-index: 1;

  /* z-index: -4; */
`;
const BurgerNav = styled.div`
  /* display: none; */
  // margin-top: 28%;
  width: 50vw;
  height: 90vh;
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  background-color: #f5f5f5;
  transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
  transition: transform 0.5s;
`;
