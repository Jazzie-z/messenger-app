import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'theme';
import ChatBox from 'components/ChatBox';
import SideNav from 'components/SideNav'

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`
const App = () => {
  const [activeFriend, setActiveFriend] = useState(1);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <SideNav activeFriend={activeFriend} setActiveFriend={setActiveFriend} />
        <ChatBox id={activeFriend} />
      </Container >
    </ThemeProvider>

  )
}

export default App
