import GlobalStyle from './styles/globalStyles';
import { 
  NavBar,
  Container,
  SignIn,
  Signup
} from './components';

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <NavBar />
        <Container>
          <Signup />
        </Container>
      </div>
    </>
  )
}

export default App
