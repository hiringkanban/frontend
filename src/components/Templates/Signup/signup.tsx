import { Signup, NavBar, Container } from '../../index';
import { navbarProps } from '../nabvarType';

const SignupTemplate: React.FC<navbarProps> = ({ leftMenu, rightMenu, logo }) => {
  return (
    <>
      <NavBar leftMenu={leftMenu} rightMenu={rightMenu} logo={logo} />
      <Container>
        <Signup />
      </Container>
    </>
  );
};

export default SignupTemplate;
