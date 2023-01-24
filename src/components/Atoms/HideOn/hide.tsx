import React from "react";
import styled from "styled-components";

type onT = 'desktop' | 'mobile';
interface hideProps {
    children: React.ReactNode;
    on: onT,
}

const StyledHideOn = styled.div<{on: onT}>`
    display: flex;
    align-items: center;
    width: 100%;
    ${props => props.on === 'desktop' ? 
        `@media (min-width: 769px) {
            display: none;
        }`:
        `@media (max-width: 768px) {
            display: none;
            width: auto !important;
        }` 
    }
    @media (max-width: 768px) {
        width: auto;
    }
`;

const HideOn: React.FC<hideProps> = ({ children, on }) => 
    <StyledHideOn on={on}> 
        {children} 
    </StyledHideOn>

export default HideOn;