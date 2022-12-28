import React from "react";

import { formProps } from "./type";
import StyledForm from "./style";

    
const Form:React.FC<formProps> = ({children, onSubmit}) => {

    return <StyledForm onSubmit={onSubmit}>
        {children}
    </StyledForm>
}

export default Form;