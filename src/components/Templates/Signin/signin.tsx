
import React from 'react';
import {
    NavBar,
    SignIn,
    Container
} from '../../index';

import { navbarProps } from '../nabvarType';

const SigninTemplate: React.FC<navbarProps> = ({ leftMenu, rightMenu, logo }) => {
    return (
        <>
            <NavBar leftMenu={leftMenu} rightMenu={rightMenu} logo={logo}/>
            <Container> 
                <SignIn />
            </Container>
        </>
    )
}

export default SigninTemplate;