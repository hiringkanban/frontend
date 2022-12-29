import React from "react";
import { Link } from "react-router-dom";
import StyledMenu from "./style";
import { menuProps } from "./type";

const Menu:React.FC<menuProps> = (props) => {

    const { items, lastChildStyle, stacked } = props;

    return (
        <StyledMenu 
            lastChildStyle={lastChildStyle}
            stacked={stacked}
        >
            {items !== undefined && items.map((item, index) => 
                <li key={index}>
                    {item.icon}
                    <Link to={item.href}> {item.value} </Link>
                </li>
            )}
        </StyledMenu>
    )
}
export default Menu;
