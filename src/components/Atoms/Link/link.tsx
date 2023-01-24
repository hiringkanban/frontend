import React from "react";
import StyledLink from './style';

interface LinkProps {
    href: string,
    color?: string,
    children: React.ReactNode
}

const Link:React.FC<LinkProps> = ({ href, children, color }) => {
    return ( 
        <StyledLink to={href} color={color}> {children} </StyledLink>
    )
}

export default Link;