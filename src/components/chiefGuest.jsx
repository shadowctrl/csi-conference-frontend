import React from 'react'
import styled from 'styled-components'
import Typewriter from "typewriter-effect";
import "./hero.css";

const chiefGuest = () => {
  return (
    <Div>
        <LeftWrap>
        <img className='animate' src="/images/isro.avif" alt="" />
        {/* <h1>
                Mylswamy Annadurai
        </h1> */}
        </LeftWrap>
        <RightWrap>
           <h1>Mylswamy Annadurai</h1>
           <div>
           <Typewriter
                onInit={(typewriter) => {
                typewriter.typeString("Former Director, ISRO Satelite Centre & Chandrayan Project.")
                typewriter.start();
            }}
            />
            </div>
            <Border
          id="ob"
          className=" border-double border-[4px]  border-sky-600 animate "
        />
            <span className='text-justify animate'>
                Mylswamy Annadurai is known by name Moon Man of India, he was born on July 2, 1958, Kodhawady, Tamil Nadu, India. 
                He is an Indian aerospace engineer who held a number of posts with the Indian Space Research Organisation (ISRO), 
                including the directorship (2015–18) of the U R Rao Satellite Centre (formerly the ISRO Satellite Centre).
                Following his early education in his native village, Annadurai in 1980 earned a bachelor’s degree in engineering 
                from the Government College of Engineering in Coimbatore, Tamil Nadu. 
            </span>
     
           {/* <h2>Former Director, ISRO Satelite Centre & Chandrayan Project.</h2> */}
        </RightWrap>
    </Div>
  )
}

export default chiefGuest

const Div = styled.div`
    
    display: flex;
    img{
        margin-top: 30px;
        width: 500px;
        height: 300px;
        border-radius: 25px;
        /* display: flex; */
    }
    font-family: poppins   ;
   
`

const LeftWrap = styled.div`

    width: 35%;
    /* margin-right: 20px; */
`;

const RightWrap = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    /* justify-content: center; */

    h1{
        /* margin-left: 150px; */
        margin-top: 20px;
        color: rgb(2, 132, 199);
        font-weight: 600;
        font-size: 40px;

    }

    div{
        font-size: 20px;
       color: rgb(249, 115, 22);;
       font-weight: 500;
    }
    /* div{
        margin-right: 0;
    } */

    span{
        margin-right: 50px;
        font-size: 23px;
    }


`;

const Border = styled.div`
    margin-right: 180px;
    margin-top: 10px;
    margin-bottom: 20px;
`;