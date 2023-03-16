import React from 'react'

//                   JS  FUNCTIONS
import styled from 'styled-components'
import Typewriter from "typewriter-effect";
import { useState } from 'react';


//                   USR FUNCTIONS
import Popup from './Popup';


//                   ICONS

import { AiFillHome, AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { MdGroups, MdOutlineGroupAdd } from 'react-icons/md';
import { BiBody } from 'react-icons/bi';
import { GiPublicSpeaker, GiHamburgerMenu } from 'react-icons/gi';
import { CgNotes } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { RiCloseCircleFill } from 'react-icons/ri';




const Head = () => {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [iconSize, setIconSize] = useState(20);
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [more, setMore] = useState(false);

  const Morefun = () => {
    more ? setMore(false) : setMore(true)
  }
  return (

    <HeaderC>

      <TopNav>

        <a href='/'>
          <img src="/images/csilogo.png" alt="" />
        </a>

        <Heading>
          <h1>
            COMPUTER SOCIETY OF INDIA
          </h1>
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

      <MiddleNav>
        <Ul>
          <li>
            <AiFillHome size={iconSize} />
            <a href="#">
              <button onClick={() => setButtonPopup(true)}>Home</button>
            </a>
          </li>
          <li>
            <MdGroups size={iconSize} />
            <a href="/#ac">About Conference</a>
          </li>


          <li>
            <GiPublicSpeaker size={iconSize} />
            <a href="/chiefGuest">
              <button onClick={() => setButtonPopup(false)}>Chief guest</button>
            </a>
          </li>

          <li>

            <CgNotes size={iconSize} />
            <a href="/#r">Registrations</a>
          </li>

          <li onClick={() => Morefun()}>
            <a href="#">More</a>
            <DownAr show={more}>
              <AiFillCaretDown size={20} />
            </DownAr>
            <UpAr show={more}>
              <AiFillCaretUp size={20} />
            </UpAr>
          </li>
          {/* <li>
            <FcAbout size={iconSize} />
            <a href="/#au">About Us</a>
          </li>

          <li>
            <BiBody size={iconSize} />
            <a href="/#ob">Organising body</a>
          </li>
          
          <li>
            <MdOutlineGroupAdd size={iconSize} />
            <a href="/#cm">Committee members</a>
          </li> */}

        </Ul>



        <MenuButton show={burgerStatus}>
          <button onClick={() => setBurgerStatus(true)}>
            <GiHamburgerMenu size={25} />
          </button>
        </MenuButton>

        <BurgerNav show={burgerStatus}>
          <button on onClick={() => setBurgerStatus(false)}>
            <RiCloseCircleFill size={iconSize} />
          </button>

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
      </MiddleNav>
      <BottomNav show={more}>
        <More 
          show={more}
         
        >
          <li  className="bg-gray-gradient">
            <span>
            <FcAbout size={iconSize} />
            <a href="/#au">About Us</a>
            </span>
          </li >

          <li  className="bg-gray-gradient">
            <span>
            <BiBody size={iconSize} />
            <a href="/#ob">Organising body</a>
            </span>
          </li>

          <li  className="bg-gray-gradient">
            <span>
            <MdOutlineGroupAdd size={iconSize} />
            <a href="/#cm">Committee members</a>
            </span>
          </li>
        </More>
      </BottomNav>
    </HeaderC>


  )
}

export default Head




const HeaderC = styled.div`
    /* height: 48vh; */
    width: 100%;
    position: relative;
    /* z-index: 5; */
    background-color: rgb(51, 65, 85);

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {}
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;




const TopNav = styled.div`
    width: 100%;
    height: 19.5vh;
    /* position: absolute; */
    /* top: 0; */
    z-index: 3;
    /* background-color: black; */
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 30px;
    
    img{
      /* width:120px;
      height: 120px; */
      width: 7.2vw;
      height: 7.2vw;
    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {}
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;

const Heading = styled.div`
    
    color: #f5f5f5;

    h1{
      font-size: 2.3vw;
      font-weight: 700;
    }

    span{
      font-size: 1.3vw;
      font-weight: 600;
    }
 @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {}
   
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;




const MiddleNav = styled.div`
    height: 8.5vh;
    display: flex;
    
    /* align-items: center; */
    /* position: sticky; */
    /* padding: 0 20px; */
    /* background-color: red; */
  
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
      display: flex;
      /* flex-direction: row-reverse; */
      padding-right: 4vw;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;
const Ul = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: pink; */
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    
    justify-content: space-between;
   
   
    padding: 0 13vw;


    li{
      display: flex;
      /* flex-direction: row; */
      flex-wrap: nowrap;
      list-style: none;
      align-items: center;
      justify-content: center;
      
      gap: 7px;
      color: #f5f5f5;

      a{
        color: rgba(189, 230, 253, 1);
        font-size: 1.1vw;
        font-weight: 700;
      }

      &:hover {
      background-color: rgba(12, 13, 16, 1);
      border-radius: 10px;
      padding: 5px 7px;
    }
    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
      width: 0vw;
      display: none ;
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}


    /* @media (min-width: 768px){
        width: 100vw;
    } */
` ;

const MenuButton = styled.div`
    
    width: 10vw;
    height: 100%;
    display: flex;
    justify-content: center;
    display: ${(props) => (props.show ? "none" : "flex")};
    /* background-color: pink; */
    align-items: center;
    z-index: 1;
    color: #f5f5f5;
    
    @media (min-width: 768px){
        display: none;
    }
    /* display: none; */
    /* width: 0vw; */
    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
      /* right: 0; */
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;

const BurgerNav = styled.div`
      
      height: 50vh;
      width: 70vh;
      position: absolute;
      right: 0;
      display: flex;
      flex-direction: column;
      /* background-color: yellow; */
      border-radius: 20px;
      width: 25vw;
      transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
      transition: transform 0.5s;
      /* display: ${(props) => (props.show ? "" : "none")}; */
      /* justify-content: center; */
      /* align-items: center; */
      /* padding-right: 70px; */

      li{
        display: flex-wrap;
        flex-direction: row;
        flex-wrap: nowrap;
       
        /* gap: 7px; */

        a{
          font-size: 5px;
        }
      }

      @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {

      }
      @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;

const MenuWrap = styled.div`
    li{
      display: felx;
    }
`;

const DownAr = styled.div`
  display: ${(props) => (props.show ? "none" : "")};
`;

const UpAr = styled.div`
   display: ${(props) => (props.show ? "" : "none")};
`;

const BottomNav = styled.div`
    width: 100%;
    height: 20vh;
    position: absolute;
    top: 28vh;
    z-index: 1;
    /* background-color: pink; */
    transform : ${(props) => (props.show ? "translateY(0)" : "translateY(-300%)")};
    transition: transform 0.5s;
`;
const More = styled.div`
    height: 20vh;
    width: 16vw;
    /* z-index: 1; */
    /* transform : ${(props) => (props.show ? "translateY(0)" : "translateY(-100%)")}; */
    /* transition: 0.5s; */
    /* background-color: yellow; */
    margin-left: 75.5vw;
    display: flex;
    flex-direction: column;
    gap: 0.07vw;
    /* box-shadow: 0px 3px 16px 7px; */
    /* opacity: 0.2; */
    /* padding: 0.5vh 1.9vw; */
    border-radius: 8%;
    
    /* align-items: center; */
    

    /* display: ${(props) => (props.show ? "translateY(0)" : "translateX(100%)")}; */

    li{
        display: flex;
        margin: 0 0vw;
        font-size: 1vw;
        color: #f5f5f5;
        border-bottom: 1px solid #f5f5f5;
        list-style-type: none;
        /* margin-bottom: 1vw; */
        font-weight: 600;
        padding: 0.3vw 0.9vw;
        box-shadow: 10px 8px 16px 4px;
        border-radius: 10px ;
        /* opacity: 0.9; */

      span{
        display: flex;
        gap: 1vw;
        margin-bottom: 1vw;
      }
    }

`;