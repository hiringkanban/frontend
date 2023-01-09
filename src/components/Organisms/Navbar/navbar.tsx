import React, { useState } from "react";
import Container from "../../Atoms/Container";
import FlexBox from "../../Atoms/Flexbox";
import NavToggle from '../../Atoms/NavToggle';
import HideOn from "../../Atoms/HideOn";
import FlexItem from "../../Atoms/FlexItem";
import Menu from "../../Molecules/Menu";
import { StyledNav, MobileNav, MobileNavList} from './style';
import { navbarProps } from "./type";

const NavBar:React.FC<navbarProps> = ({leftMenu, rightMenu, logo}) => {
    const [open, setOpen] = useState(false);

    return (
        <StyledNav>
            <HideOn>
                <Container>
                    <FlexBox alignItem="center">
                        {logo}
                        <FlexItem flex={1}>
                            <Menu items={leftMenu} />
                        </FlexItem>
                        <FlexItem>
                            <Menu items={rightMenu}/>
                        </FlexItem>
                        <NavToggle onClick={() => setOpen(!open)} open={open} />                           
                    </FlexBox>
                </Container>
            </HideOn>
            <MobileNav>
                <Container>
                    <FlexBox justify="end" alignItem="center" height={72}>
                        <NavToggle onClick={() => setOpen(!open)} open={open} />                           
                    </FlexBox>
                    { open && 
                        <MobileNavList>
                            <Menu items={leftMenu}/>
                            <Menu items={rightMenu} lastChildStyle="border: none;"/>
                        </MobileNavList>
                    }
                </Container>
            </MobileNav>
        </StyledNav>
    )
}

export default NavBar;