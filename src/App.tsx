import GlobalStyle from './styles/globalStyles';
import { 
  Input,
  NavBar,
  Container,
  Box
} from './components';
import { useState } from 'react';

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Container>
          <Box width="30%">
            <Input id="email" type="password" name="Email" placeholder="Email" onChange={() => console.log('')}/>
          </Box>
        </Container>
      </div>
    </>
  )
}

export default App
