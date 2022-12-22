import React, { useState } from "react";
import {StyledNav, MobileNav} from './style';
import Logo from '../../Atoms/Logo';
import Button from '../../Atoms/Button';
import Menu from '../../Molecules/menu';
import Container from "../../Atoms/Container";
import Row from "../../Atoms/Row";
import NavToggle from '../../Atoms/NavToggle';
import HideOn from "../../Atoms/HideOn";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const leftMenu = [
        { value: 'Features', href: '#' },
        { value: 'Pricing', href: '#' },
        { value: 'Blog', href: '#' },
    ];

    const rightMenu = [
        { value: 'Sign In', href: '#' },
        { value: <Button> Try it for free </Button> }
    ];

    return (
        <StyledNav>
            <HideOn>
                <Container>
                    <Row>
                        <Logo />
                        <Menu items={leftMenu} open={open}/>
                        <Menu items={rightMenu} open={open}/>
                        <NavToggle onClick={() => setOpen(!open)} />                           
                    </Row>
                </Container>
            </HideOn>
            <MobileNav>
                <Container>
                    <Row justify="space-between">
                        <Logo />
                        <NavToggle onClick={() => setOpen(!open)} />                           
                    </Row>
                    <div>
                        <Menu items={leftMenu} open={open}/>
                        <Menu items={rightMenu} open={open}/>
                    </div>
                </Container>
            </MobileNav>
        </StyledNav>
    )
}

export default NavBar;