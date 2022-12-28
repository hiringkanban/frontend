import React from "react";
import { StyledText } from './style';

import { textProps } from "./type";

const Text:React.FC<textProps> = ({children, align, weight}) => {
    return <StyledText
        align={align}
        weight={weight}
    >
        {children} 
    </StyledText>
}

export default Text;
