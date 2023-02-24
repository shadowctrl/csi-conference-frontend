import React from 'react'
import styled from 'styled-components'

const ChiefPatronsB = ({name, about, img}) => {
  return (
  
       <Div2>
        
        <div>
            <h1>{name}</h1>
            <span>{about}</span>
        </div>
        <img src={img} alt="" />
     </Div2>
    
  )
}

export default ChiefPatronsB

const Div2 = styled.div`

width: 100vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* margin: 90px 0; */
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 100px;
    align-items: center;
    margin-left: 480px;
    /* justify-content: space-between; */
    /* padding: 0 300px; */
    /* margin-left: 0; */

    img{
        width: 200px;
        height: 200px;
        border-radius: 100%;
        /* box-shadow: inset 0 0 0 15px #0a66c2; */
        /* margin-right: 100px; */
        border: 3px solid rgb(51, 65, 85);
        
        /* margin-left: 50px; */

    }

    div{ 

        max-width: 20%;
        display: flex-wrap;
        flex-direction: column;
        justify-content: center;
        /* margin-right: 400px; */
        gap: 20px;
        /* align-items: center; */
    }

    h1{
       color: rgb(2,132,199);
       font-size: 25px;
       font-weight: 600;

    }

    span{
            font-size: 17px;
            font-weight: 500;
    }


    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        //potrait
        margin: 50px 0;
        flex-direction: column-reverse;
        width: 100vw;
        align-items: center;
        /* margin: 0; */
        gap: 20px;

        img{
            width: 150px;
            height: 150px;

        }

        div{
            /* margin: 0; */
            max-width: 80%;
            text-align: center;
        }

        h1{
            margin: 0;
            font-size: 17px;
        }

        span{
            font-size: 15px;
        }
    }
    @media all and (max-width: 1024px) and (max-height: 768px) and (orientation:landscape) {
        //landscape
        margin: 0;
        width: 100vw;
        flex-direction: row-reverse;
        justify-content: center;
        gap: 100px;
            
            img{
                width: 170px;
                height: 170px;
            }

            div{
                max-width: 40%;
                min-width: 40%;
                text-align: center;
            }

            h1{
                font-size: 22px;
            }

            span{
                font-size: 16px;
            }
    }

`;