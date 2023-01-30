// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import { Admin, Home, Signin, Signup, NotFound } from './components/Pages';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

const WrapperApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};
export default WrapperApp;
