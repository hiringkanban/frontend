import React from "react";
import StyledMenu from "./style";
export interface menuProps {
    items: { value: string | number | React.ReactNode, href?: string }[],
    lastChildStyle?: string,
}

const Menu:React.FC<menuProps> = ({ items, lastChildStyle }) => {
    return (
        <StyledMenu lastChild={lastChildStyle}>
            {items.map((item, index) => 
                <li key={index}><a href={item.href}> {item.value} </a></li>
            )}
        </StyledMenu>
    )
}
export default Menu;
