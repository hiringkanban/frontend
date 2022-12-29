import React from "react";
import StyledSection from "./style";
import { sectionProps } from "./type";

const Box: React.FC<sectionProps> = ({children, width, left, right}) =>  
    <StyledSection 
        width={width}
        left={left}
        right={right}
    > 
        {children} 
    </StyledSection>

export default Box;