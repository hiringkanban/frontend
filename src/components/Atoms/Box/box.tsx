import React from "react";
import StyledBox from "./style";

interface boxProps {
    children: React.ReactNode
}

const Box: React.FC<boxProps> = ({children}) =>  
    <StyledBox > {children} </StyledBox>

export default Box;