import React, { useState } from "react";
import Logo from '../../Atoms/Logo';
import Button from '../../Atoms/Button';
import Menu from '../../Molecules/menu';
import Container from "../../Atoms/Container";
import FlexBox from "../../Atoms/Flexbox";
import NavToggle from '../../Atoms/NavToggle';
import HideOn from "../../Atoms/HideOn";
import FlexItem from "../../Atoms/FlexItem";
import { StyledNav, MobileNav, MobileNavList} from './style';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const leftMenu = [
        { value: 'Features', href: '#' },
        { value: 'Pricing', href: '#' },
        { value: 'Blog', href: '#' },
    ];

    const rightMenu = [
        { value: 'Sign In', href: '/signin' },
        { value: <Button> Try it for free </Button>, href:"/signup" }
    ];

    return (
        <StyledNav>
            <HideOn>
                <Container>
                    <FlexBox alignItem="center">
                        <Logo />
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
                    <FlexBox justify="space-between" alignItem="center" height={72}>
                        <Logo />
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