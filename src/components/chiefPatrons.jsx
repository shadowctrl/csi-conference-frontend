import React from 'react'
import styled from 'styled-components'


const chiefPatronsA = ({name, about, img}) => {
  return (
     <Div1>
        <img src={img} alt="" />
        <div>
            <h1>{name}</h1>
            <span>{about}</span>
        </div>
     </Div1>
  )
}

const chiePatronsB = ({name, about, img}) => {
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

export default {chiefPatronsA, chiePatronsB};
// export default chiePatronsB;

const Div1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 50px;
        height: 50px;
    }

    h1{

    }

    span{

    }
`;

const Div2 = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    img{

    }

    h1{

    }

    span{
        
    }
`;