import React from 'react'
import styled from 'styled-components'

const ConfChairs = ({name, about, img, position}) => {
  return (
    <Div>
        <TopDiv>
          <img src={img} />
        </TopDiv>

        <BotDiv>
          <h1>{name}</h1>
          {position &&
            <h3>{position}</h3>
          }
          <h2>{about}</h2>
        </BotDiv>
    </Div>
  )
}

export default ConfChairs

const Div = styled.div`
    margin: 30px 0;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: yellow; */
    width: 100%;


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        //portrait
        
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        //landscape
    }

`;

const TopDiv = styled.div`
    img{
      margin: 15px 0;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      border: 3px solid rgb(51, 65, 85);
    }


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        //portrait
        img{
          width: 120px;
          height: 120px;
        }
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        //landscape
    }
`
;

const BotDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    

    h1{
       color: rgb(2,132,199);
       font-size: 22px;
       font-weight: 600;
    }

    h2{
        /* color: rgb(249, 115, 22); */
        text-align: center;
        max-width: 80%;
        font-size: 16px;
        margin: 10px 0;
        font-weight: 500;
    }

    h3{
      font-size: 18px;
      color: rgb(249, 115, 22);
      font-weight: 500;
    }


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        //portrait

       h1{
          font-size: 15px;
       }

       h2{
          display: none;
       }

       h3{
        font-size: 15px;
        
       }
       
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        //landscape
    }
`
;
// const <Lf
