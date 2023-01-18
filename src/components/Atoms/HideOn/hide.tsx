import React from "react";
import styled from "styled-components";

type onT = 'desktop' | 'mobile';
interface hideProps {
    children: React.ReactNode;
    on: onT,
}

const StyledHideOn = styled.div<{on: onT}>`
    width: 100%;
    ${props => props.on === 'desktop' ? 
        `@media (min-width: 768px) {
            display: none;
        }`:
        `@media (max-width: 769px) {
            display: none;
        }` 
    }
`;

const HideOn: React.FC<hideProps> = ({ children, on }) => 
    <StyledHideOn on={on}> 
        {children} 
    </StyledHideOn>

export default HideOn;