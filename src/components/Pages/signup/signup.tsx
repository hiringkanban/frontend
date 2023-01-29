import SignupTemplate from '../../Templates/Signup/signup';
import { leftMenu, rightMenu, logo } from '../navbarfill';

const Signup = () => {
  return <SignupTemplate leftMenu={leftMenu} rightMenu={rightMenu} logo={logo} />;
};

export default Signup;
