import React from 'react'
import styled from 'styled-components'


const ChiefPatronsA = ({name, about, img}) => {
  return (
     <Div1>
        <img src={img} alt="" />
        {/* <br/> */}
        <div>
            <h1>{name}</h1>
            <span>{about}</span>
        </div>
     </Div1>
  )
}



// export default {ChiefPatronsA, ChiePatronsB};
export default ChiefPatronsA;
// export ChiePatronsB;

const Div1 = styled.div`    
    width: 100vw;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* margin: 90px 0; */
    margin-top: 40px;
    margin-bottom: 40px;
    gap: 100px;
    align-items: center;
    /* justify-content: space-between; */
    /* padding: 0 300px; */
    /* margin-left: 0; */

    img{
        width: 200px;
        height: 200px;
        border-radius: 100%;
        /* z-index: ; */
        /* box-shadow: inset 0 0 0 15px #0a66c2; */
        /* margin-right: 100px; */
        border: 3px solid rgb(51, 65, 85);

        /* &:hover{
            width: 230px;
            height: 230px;
        } */

     
        
        /* margin-left: 50px; */

    }

    div{
        max-width: 30%;
        display: flex-wrap;
        flex-direction: column;
        justify-content: center;
        /* margin-right: 400px; */
        gap: 20px;
        /* align-items: center; */
    }

    h1{
       color: rgb(2,132,199);
       font-weight: 600;
       font-size: 25px;

    }

    span{
            font-size: 17px;
            font-weight: 500;
    }

    @media all and (max-width: 768px) and (max-height: 1024px) and (orientation:portrait) {
        width: 100vw;
        margin: 0;
        margin: 50px 0;
        /* margin-right: 0px; */
        flex-direction: column ;
        align-items: center;
        gap: 20px;

        img{
                width:150px;
                height: 150px;
            }

        div{
            max-width: 80%;
            /* align-items: center;
            justify-content: center; */
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

            width: 100vw;
            gap: 100px;
            justify-content: center;
            img{
                width: 170px;
                height: 170px;
            }

            div{
                max-width: 40%;
                text-align: center;
                /* gap: 300px; */
            }

            h1{
                font-size: 22px;
            }

            span{
                font-size: 16px;
            }
        }
`;

