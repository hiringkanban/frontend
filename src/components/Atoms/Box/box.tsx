import React from "react";
import StyledBox from "./style";

interface boxProps {
    width?: string,
    children: React.ReactNode
}

const Box: React.FC<boxProps> = ({children, width}) =>  
    <StyledBox width={width} > {children} </StyledBox>

export default Box;