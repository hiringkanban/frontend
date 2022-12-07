import React from "react";
import { StyledParagraph } from './style';

interface textProps {
    children: React.ReactNode
}

const Text:React.FC<textProps> = ({children}) => {
    return <StyledParagraph> {children} </StyledParagraph>
}

export default Text;
