import { NavBar, Container } from '../../index';

import { NavbarProps } from '../nabvarType';

const HomeTemplate: React.FC<NavbarProps> = ({ leftMenu, rightMenu, logo }) => {
  return (
    <>
      <NavBar leftMenu={leftMenu} rightMenu={rightMenu} logo={logo} />
      <Container>
        <h1>Home page</h1>
      </Container>
    </>
  );
};

export default HomeTemplate;
