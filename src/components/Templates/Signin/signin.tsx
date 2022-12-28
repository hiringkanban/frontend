
import React from 'react';
import {
    NavBar,
    SignIn,
    Container
} from '../../index';

const SigninTemplate = () => {
    return (
        <>
            <NavBar />
            <Container> 
                <SignIn />
            </Container>
        </>
    )
}

export default SigninTemplate;