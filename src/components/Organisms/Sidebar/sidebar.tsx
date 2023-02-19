import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../Atoms/Logo';
import Menu from '../../Molecules/Menu';

import { StyledSideBar, StyledLogo, CLoseIcon } from './style';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import SideBarContext from '../../../context';

const SideBar = () => {
  const { toggle, setToggle } = useContext(SideBarContext);

  const leftMenu = [
    {
      id: 1,
      value: 'Jobs',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'clipboard']} />,
    },
    {
      id: 2,
      value: 'Condidats',
      href: 'condidats',
      icon: <FontAwesomeIcon icon={['far', 'user']} />,
    },
    {
      id: 3,
      value: 'Email system',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'envelope']} />,
    },
    {
      id: 4,
      value: 'Rols',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'id-card']} />,
    },
    {
      id: 5,
      value: 'Membres',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'building']} />,
    },
    {
      id: 6,
      value: 'Settings',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'sun']} />,
    },
    {
      id: 7,
      value: 'Help',
      href: '#',
      icon: <FontAwesomeIcon icon={['far', 'life-ring']} />,
    },
  ];

  return (
    <StyledSideBar toggle={toggle}>
      <FlexBox justify="space-between">
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <CLoseIcon>
          <FontAwesomeIcon icon={['fas', 'close']} onClick={() => setToggle(false)} />
        </CLoseIcon>
      </FlexBox>
      <Menu items={leftMenu} stacked />
    </StyledSideBar>
  );
};

export default SideBar;
