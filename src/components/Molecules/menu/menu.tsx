import React from "react";
import StyledMenu from "./style";

interface menuProps {
    items: { value: string | number | React.ReactNode, href?: string }[]
}

const Menu:React.FC<menuProps> = ({ items }) => {
    return (
        <StyledMenu>
            {items.map((item, index) => 
                <li key={index}><a href={item.href}> {item.value} </a></li>
            )}
        </StyledMenu>
    )
}
export default Menu;
