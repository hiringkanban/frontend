import React from "react";
import { Link } from "react-router-dom";

import StyledMenu from "./style";
export interface menuProps {
    items: { value: string | number | React.ReactNode, href: string }[],
    lastChildStyle?: string,
}

const Menu:React.FC<menuProps> = ({ items, lastChildStyle }) => {
    return (
        <StyledMenu lastChild={lastChildStyle}>
            {items.map((item, index) => 
                <li key={index}>
                    <Link to={item.href}> {item.value} </Link>
                </li>
            )}
        </StyledMenu>
    )
}
export default Menu;
