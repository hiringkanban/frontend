import React from 'react';
import { NavBar, SignIn, Container } from '../../index';

import { NavbarProps } from '../nabvarType';

const SigninTemplate: React.FC<NavbarProps> = ({ leftMenu, rightMenu, logo }) => {
  return (
    <>
      <NavBar leftMenu={leftMenu} rightMenu={rightMenu} logo={logo} />
      <Container>
        <SignIn />
      </Container>
    </>
  );
};

export default SigninTemplate;
