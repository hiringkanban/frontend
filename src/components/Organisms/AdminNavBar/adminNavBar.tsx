import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import Box from '../../Atoms/Box';
import Container from '../../Atoms/Container';
import SideBarContext from '../../../context';
import HideOn from '../../Atoms/HideOn';
import StyledAdminNav from './style';
import Drodown from '../../Molecules/Drodown';
import InlineList from '../../Molecules/InlineList/inlineList';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import { updateAuth } from '../Signin/auth';

const AdminNavBar = () => {
  const { setToggle } = useContext(SideBarContext);
  const dispatch = useDispatch();
  const actions = [
    {
      name: 'Profile',
      onClick: () => {},
    },
    {
      name: 'Settings',
      onClick: () => {},
    },
    {
      name: 'Logout',
      onClick: () => {
        localStorage.setItem('authenticated', '');
        dispatch(updateAuth(false));
      },
    },
  ];

  const leftAdminNav = [
    { id: 1, value: 'Home', href: '#' },
    { id: 2, value: 'Contact', href: '#' },
  ];

  const rightMenu = [
    { id: 1, value: <FontAwesomeIcon icon={['far', 'bell']} />, href: '#' },
    { id: 2, value: <FontAwesomeIcon icon={['far', 'moon']} />, href: '#' },
    {
      id: 3,
      value: <Drodown menu={actions} name={<FontAwesomeIcon icon={['fas', 'user-tie']} />} />,
      href: '#',
    },
  ];

  return (
    <StyledAdminNav>
      <Container>
        <Box padding="10px 10px">
          <FlexBox justify="space-between">
            <HideOn on="desktop">
              <FontAwesomeIcon icon={['fas', 'bars']} onClick={() => setToggle(true)} />
            </HideOn>
            <InlineList items={leftAdminNav} />
            <InlineList items={rightMenu} />
          </FlexBox>
        </Box>
      </Container>
    </StyledAdminNav>
  );
};

export default AdminNavBar;
