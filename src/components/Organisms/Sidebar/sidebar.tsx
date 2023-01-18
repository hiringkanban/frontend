import { useContext, useState } from "react";
import Logo from "../../Atoms/Logo";
import Menu from "../../Molecules/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    StyledSideBar,
    StyledLogo,
    OpenIcon,
    CLoseIcon
} from "./style";
import FlexBox from "../../Atoms/Flexbox/flexbox";
import { SideBarContext } from "../../../context";

const SideBar = () => {

    const {toggle, setToggle} = useContext(SideBarContext);

    const leftMenu = [
        { value: 'Jobs', href: '#', icon: <FontAwesomeIcon icon={['far', 'clipboard']} />},
        { value: 'Condidats', href: '#', icon: <FontAwesomeIcon icon={['far', 'user']} /> },
        { value: 'Email system', href: '#', icon:<FontAwesomeIcon icon={['far', 'envelope']} />},
        { value: 'Rols', href: '#', icon:<FontAwesomeIcon icon={['far', 'id-card']}/>},
        { value: 'Membres', href: '#', icon:<FontAwesomeIcon icon={['far', 'building']} />},
        { value: 'Settings', href: '#', icon:<FontAwesomeIcon icon={['far', 'sun']} />},
        { value: 'Help', href: '#', icon:<FontAwesomeIcon icon={['far', 'life-ring']} />},
    ];

    return (
        <>
            <StyledSideBar toggle={toggle}>
                <FlexBox justify="space-between">
                    <StyledLogo>
                        <Logo />
                    </StyledLogo>
                    <CLoseIcon>
                        <FontAwesomeIcon 
                            icon={['fas', 'close']}
                            onClick={() => setToggle(false)}
                        />
                    </CLoseIcon>
                </FlexBox>
                <Menu items={leftMenu} stacked/>
            </StyledSideBar>
        </>
    );
}

export default SideBar;