// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/globalStyles';
import store from './store/store';
import { Admin, Home, Signin, Signup, NotFound, Condidats } from './components/Pages';
import ProtectedRoute from './components/Atoms/ProtectRoute';

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <div className="App">
          <Routes>
            <Route index element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="admin/condidats" element={<Condidats />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Provider>
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
