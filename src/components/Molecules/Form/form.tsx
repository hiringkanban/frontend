import React from "react";

import { formProps } from "./type";
import StyledForm from "./style";

    
const Form:React.FC<formProps> = ({children}) => {

    return <StyledForm>
        {children}
    </StyledForm>
}

export default Form;