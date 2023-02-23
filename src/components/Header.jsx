import styled from "styled-components";
import Info from "./Info";
// import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
// import { IoLinkSharp } from 'react-icons/iolink'
import { RiCloseCircleFill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
// import { IoBody } from 'react-icons/io'
import { BiBody } from "react-icons/bi";
import { MdOutlineGroupAdd } from "react-icons/md";
import Typewriter from "typewriter-effect";
import Popup from "./Popup";

import { useState } from "react";

import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu, GiPublicSpeaker } from "react-icons/gi";

import { FcAbout } from "react-icons/fc";

import { Outlet } from "react-router-dom";
// GiPublicSpeaker
// import { GrClose } from 'react-icons/gr'

// import Popup from './components/Popup';
const Header = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <HeaderC className="bg-slate-700 py-7 md:py-0">
      <TopNav className="">
        <Logo className="">
          <a href="/">
            <img src="/images/csilogo.png" />
          </a>
        </Logo>

        <Heading className="font-poppins text-white font-extrabold ml-2">
          <h1 className="sm:text-3xl ">COMPUTER SOCIETY OF INDIA</h1>
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
          <AiFillHome size={`25`} />
          <a href="#">
            <button onClick={() => setButtonPopup(true)}>Home</button>
          </a>
        </li>
        <li>
          <MdGroups size={30} />
          <a href="/#ac">About Conference</a>
        </li>
        <li>
          <BiBody size={25} />
          <a href="/#ob">Organising body</a>
        </li>
        <li>
          <MdOutlineGroupAdd size={30} />
          <a href="/#cm">Committee members</a>
        </li>
        {/* <li>
          
          <RiLinksFill size={27} />
          <a href="#il">Important links</a>
        </li> */}

        <li>
          <GiPublicSpeaker size={25} />
          <a href="/chiefGuest">
            <button onClick={() => setButtonPopup(false)}>Chief guest</button>
          </a>
        </li>

        <li>
          {/* <FcAbout size={25} /> */}
          <CgNotes size={25} />
          <a href="http://localhost:3333/#r">Registrations</a>
        </li>

        <li>
          <FcAbout size={25} />
          <a href="/#au">About Us</a>
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
          className="rounded-xl bg-gray-gradient sm:w-[70vh] w-[25vh]"
        >
          <CloseBgNav onClick={() => setBurgerStatus(false)}>
            <RiCloseCircleFill size={30} />
          </CloseBgNav>
          <li>
            <MenuWrap>
              <AiFillHome size={25} />
              <a href="#">
                <button onClick={() => setButtonPopup(true)}>Home</button>
              </a>
            </MenuWrap>
          </li>
          <li>
            <MenuWrap>
              <MdGroups size={30} />
              <a href="/#ac">
                <button onClick={() => setBurgerStatus(false)}>
                  About Conference
                </button>
              </a>
            </MenuWrap>
          </li>
          <li>
            <MenuWrap>
              <BiBody size={25} />
              <a href="/#ob">
                <button onClick={() => setBurgerStatus(false)}>
                  Organising body
                </button>
              </a>
            </MenuWrap>
          </li>
          <li>
            <MenuWrap>
              <MdOutlineGroupAdd size={30} />
              <a href="/#cm">
                <button onClick={() => setBurgerStatus(false)}>
                  Committee members
                </button>
              </a>
            </MenuWrap>
          </li>
          {/* <li>
            <MenuWrap>
            <RiLinksFill size={27} />
              <a href="#il">
                <button onClick={() => setBurgerStatus(false)}>Important links</button>
                </a>
            </MenuWrap>
            

          </li> */}
          <li>
            <MenuWrap>
              <GiPublicSpeaker size={25} />
              <a href="/chiefGuest">
                <button onClick={() => setBurgerStatus(false)}>
                  Chief Guest
                </button>
              </a>
            </MenuWrap>
          </li>
          <li>
            <MenuWrap>
              <CgNotes size={25} />
              <a href="http://localhost:3333/#r">
                <button onClick={() => setBurgerStatus(false)}>
                  Registrations
                </button>
              </a>
            </MenuWrap>
          </li>
          <li>
            <MenuWrap>
              <FcAbout size={25} />
              <a href="/#au">
                <button onClick={() => setBurgerStatus(false)}>About Us</button>
              </a>
            </MenuWrap>
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
  // width: 100vw;
  // height: 32vh;
  // margin-top: 0;
  // padding-top: 0;
  // display: flex;
  // flex-direction: column;
  // font-family: poppins;
  // @media (max-width: 1060px) {
  //   height: 17vh;
  // }

  // /* @media(max-width: 1060px){
  //   height: 25vh;
  // } */
  // /* position: absolute; */

  // /* z-index: ; */
  /* @media(min-width: 769px){
  height: 33vh;
  } */
`;

const Main = styled.div``;

const TopNav = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 70%; */
  /* background-color: black; */
  /* height: 80%; */

  @media (max-width: 1060px) {
    padding: 0;
    margin: 0;
    height: 78%;
    /* background-color: black; */
  }
`;

const Logo = styled.div`
  width: 110px;
  height: 110px;
  margin: 10px 20px;

  @media (max-width: 1060px) {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    width: 80px;
    height: 80px;
  }
`;

const Heading = styled.div`
  // display: flex;
  // flex-direction: column;
  // padding-left: 20px;
  // color: #f5f5f5;
  // padding-top: 40px // margin-top: 40px;
  //   h1 {
  //   /* color:rgb(56, 189, 248);
  //               @media(max-width: 1060px){ */
  //   /* color: #f5f5f5; */
  //   font-weight: 800;
  //   font-size: 35px;
  // }
  // span {
  //   /* color: #f5f5f5; */
  //   font-size: 22px;
  //   font-weight: 600;
  // }
  // @media (max-width: 1060px) {
  //   padding: 0;
  //   margin: 0;
  //   margin-left: 15px;
  //   h1 {
  //     font-size: 18px;
  //   }
  //   span {
  //     font-size: 14px;
  //   }
  // }
`;

const BottomNav = styled.div`
  display: flex;
  /* width: 20%; */
  /* height: 22%; */
  position: relative;
  justify-content: center;
  /* padding: 5px 0; */
  /* padding-left: 420px; */
  /* margin-left: 100px; */
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;

  li {
    margin: 0 auto;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    align-items: center;
    /* @media(max-width: 1060px){
          display: none;
        } */
    &:hover {
      background-color: rgba(12, 13, 16, 1);
      border-radius: 10px;
      padding: 5px 7px;
    }
  }

  a {
    display: flex;
    text-decoration: none;
    margin-left: 5px;
    margin-top: 5px;
    /* color: rgb(192,192,192); */
    color: rgba(189, 230, 253, 1);
    font-weight: 700;
    font-size: 18px;

    /* @media(max-width: 1060px){
          display: none;
        } */
  }

  @media (max-width: 1060px) {
    display: none;
    padding: 0px;
    height: 0%;
    /* justify-content: left; */
  }
`;

const Button = styled.button`
  @media (min-width: 1060px) {
    display: none;
  }
  z-index: 1;
  padding: 0 10px;
  margin: 0px;
  position: absolute;
  right: 25px;
  top: -10px;
  cursor: pointer;
  z-index: 0;
  color: #f5f5f5;
  margin-right: 2px;
  /* padding-bottom: 2px; */
`;

const CloseBgNav = styled.button`
  margin-left: 5px;
  margin-bottom: 30px;
  z-index: 1;
  margin-top: 10px;
  /* margin-right:30px; */
  cursor: pointer;
`;
const BottomNavPh = styled.div`
  @media (min-width: 1060px) {
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
    margin-bottom: 25px;
    margin-left: 7px;
  }
  z-index: 1;

  /* z-index: -4; */
`;
const BurgerNav = styled.div`
  /* display: none; */
  // width: 62vw;
  height: 90vh;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  overflow-y: scroll;
  transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
  transition: transform 0.5s;
  color: #f5f5f5;
  li {
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    /* padding-bottom: 5px; */
  }

  a {
    /* margin-bottom: 30px; */
  }
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;
