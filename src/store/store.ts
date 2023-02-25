import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../components/Organisms/Signin/auth';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
