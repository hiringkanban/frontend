import React from "react";
import styled from "styled-components";
import { textColors } from '../../../styles/styleGuide';

interface LinkProps {
    href: string,
    children: React.ReactNode
}

const StyledLink = styled.a`
    text-decoration: none;
    color: ${textColors.links_color}
`;

const Link:React.FC<LinkProps> = ({ href, children }) => {
    return ( 
        <StyledLink href={href}> {children} </StyledLink>
    )
}

export default Link;