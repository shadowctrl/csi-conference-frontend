import React from "react";
// import './Popup.css'
import styled from "styled-components";
function Popup(props) {
  return props.trigger ? (
    <div>
      <Pop>
        <PopInner>
          {/* <button className='close-btn bg-slate-100'>close</button> */}
          {/* <p>sdafsd</p> */}
          {props.children}
        </PopInner>
      </Pop>
    </div>
  ) : (
    ""
  );
}

export default Popup;

const Pop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const PopInner = styled.div`
  position: relative;
  /* top: 0; */
  padding-top: 0px;
  padding-bottom: 0;
  width: 40vw;
  height: 95vh;
  z-index: 2;

  button {
    position: absolute;
    padding: 10px;
    top: 0px;
    right: 1px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
  }

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 80vw;
    height: 70vh;
  }
`;
