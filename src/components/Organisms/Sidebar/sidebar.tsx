import Logo from "../../Atoms/Logo";
import Menu from "../../Molecules/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    StyledSideBar,
    StyledLogo
} from "./style";

const SideBar = () => {

    const leftMenu = [
        { value: 'Jobs', href: '#', icon: <FontAwesomeIcon icon={['far', 'clipboard']} style={{color: "white"}}/>},
        { value: 'Condidats', href: '#', icon: <FontAwesomeIcon icon={['far', 'user']} style={{color: "white"}}/> },
        { value: 'Email system', href: '#', icon:<FontAwesomeIcon icon={['far', 'envelope']} style={{color: "white"}}/> },
        { value: 'Rols', href: '#', icon:<FontAwesomeIcon icon={['far', 'id-card']} style={{color: "white"}}/>  },
        { value: 'Membres', href: '#', icon:<FontAwesomeIcon icon={['far', 'building']} style={{color: "white"}}/> },
        { value: 'Settings', href: '#', icon:<FontAwesomeIcon icon={['far', 'sun']} style={{color: "white"}}/> },
        { value: 'Help', href: '#', icon:<FontAwesomeIcon icon={['far', 'life-ring']} style={{color: "white"}}/> },
    ];

    return (
        <StyledSideBar>
            <StyledLogo>
                <Logo />
            </StyledLogo>
            <Menu items={leftMenu} stacked/>
        </StyledSideBar>
    );
}

export default SideBar;