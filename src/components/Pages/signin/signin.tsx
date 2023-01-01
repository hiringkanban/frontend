import React from "react";
import SigninTemplate from "../../Templates/Signin";
import { leftMenu, rightMenu, logo} from'../navbarfill';

const SignInPage = () => {

    return (
        <SigninTemplate 
            leftMenu={leftMenu}
            rightMenu={rightMenu}
            logo={logo}
        />
    );
}

export default SignInPage;