import React from "react";
import StyledLink from './style';

interface LinkProps {
    href: string,
    children: React.ReactNode
}

const Link:React.FC<LinkProps> = ({ href, children }) => {
    return ( 
        <StyledLink to={href}> {children} </StyledLink>
    )
}

export default Link;