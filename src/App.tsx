import GlobalStyle from './styles/globalStyles';
import { 
  NavBar,
  Container,
  SignIn
} from './components';
import { useState } from 'react';

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Container>
          <SignIn />
        </Container>
      </div>
    </>
  )
}

export default App
