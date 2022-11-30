import { FC } from 'react'

import Sidebar from './components/Sidebar/Sidebar'
import Tools from './components/Tools/Tools'
import styled from "styled-components";
import { GlobalStyle } from './styles/global';
import NavbarMenu from './components/Navbar/Navbar';
import Schedule from './components/Schedule/Schedule';

const App: FC = () => {
  return (
    <>
    <GlobalStyle />
        <Container>
          <Sidebar />
          <Tools />
          <Box>
            <NavbarMenu />
            <Schedule />
          </Box>
        </Container>
    </>
  )
}

const Box = styled.div`
  height: 100vh;
`
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
`

export default App
