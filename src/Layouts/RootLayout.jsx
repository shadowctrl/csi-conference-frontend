import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Info from '../components/Info'
import { Outlet } from 'react-router-dom'
import Head from '../components/Head'

const RootLayout = () => {
  return (
    <Div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      {/* <Info/> */}
    </Div>
  )
}

export default RootLayout

const Div = styled.div`

    @media(min-width: 769px){

      width: 100vw; 
      height: 100vh;
    }
`;