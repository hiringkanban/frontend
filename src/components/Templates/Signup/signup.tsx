import { Signup, NavBar, Container } from '../../index';
import { NavbarProps } from '../nabvarType';

const SignupTemplate: React.FC<NavbarProps> = ({ leftMenu, rightMenu, logo }) => {
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
