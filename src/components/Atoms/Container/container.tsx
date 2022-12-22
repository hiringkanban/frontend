import React from "react";
import StyledContainer from "./style";

interface containerProps {
    children: React.ReactNode
}

const Container: React.FC<containerProps> = ({children}) =>  
    <StyledContainer> {children} </StyledContainer>

export default Container;
