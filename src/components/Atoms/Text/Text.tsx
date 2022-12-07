import React from "react";
import { StyledText } from './style';

interface textProps {
    children: React.ReactNode
}

const Text:React.FC<textProps> = ({children}) => {
    return <StyledText> {children} </StyledText>
}

export default Text;
