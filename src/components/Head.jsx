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
  const [burgerStatus, setBurgerStatus] = useState(false)
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

      <BottomNav>
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
        
          <li>
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
              </li>
          {/* <MoreButton>
            <div>
              <span>More</span>
              <DownAr>
                <AiFillCaretDown size={27} />
              </DownAr>
              <UpAr>
                <AiFillCaretUp size={27} />
              </UpAr>
            </div>
            <More>
           

         
            </More>
          </MoreButton> */}

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
      </BottomNav>

    </HeaderC>
  )
}

export default Head

const HeaderC = styled.div`
    height: 28vh;
    width: 100vw;
    background-color: rgb(51, 65, 85);

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {}
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {}

`;




const TopNav = styled.div`
    width: 100%;
    height: 65%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    
    img{
      width:120px;
      height: 120px;
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




const BottomNav = styled.div`
    height: 35%;
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
    width: 100vw;
    background-color: brown;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0 6vw;


    li{
      display: flex;
      /* flex-direction: row; */
      flex-wrap: nowrap;
      list-style: none;
      align-items: center;
      gap: 7px;
      color: #f5f5f5;

      a{
        color: rgba(189, 230, 253, 1);
        font-size: 0.95vw;
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
      position: fixed;
      right: 0;
      display: flex;
      flex-direction: column;
      background-color: yellow;
      border-radius: 20px;
      width: 25vw;
      transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
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

// const MoreButton = styled.div`

//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       margin-top: 13vw;
//       height: 30vh;
//       width: 19vw;
//       background-color: pink;
//       div{
//         display: flex;
//         margin-bottom: 0.7vw;
//       }

//       z-index: 1;
//       /* align-items: center; */
//       /* gap: 5px; */
// `;

// const DownAr = styled.div`
// `;

// const UpAr = styled.div`
// `;

// const More = styled.div`

//       display: flex;
//       width: 100%;
//       flex-direction: column;
//       background-color: red;
//       padding: 0 1vw;
//       gap: 1.5vw;
//       /* gap: ; */
// `;

