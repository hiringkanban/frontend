import React from "react";
import styled from "styled-components";

interface hideProps {
    children: React.ReactNode;
}

const StyledHideOn = styled.div`
    width: 100%;
    @media (max-width: 768px) {
        display: none;
    }
`;

const HideOn: React.FC<hideProps> = ({ children }) => <StyledHideOn> {children} </StyledHideOn>

export default HideOn;