import React from 'react';
import { Link } from 'react-router-dom';
import StyledMenu from './style';
import { MenuProps } from './type';

const Menu: React.FC<MenuProps> = (props) => {
  const { items, lastChildStyle, stacked } = props;

  return (
    <StyledMenu lastChildStyle={lastChildStyle} stacked={stacked}>
      {items !== undefined &&
        items.map((item) => (
          <li key={item.id}>
            {item.icon}
            <Link to={item.href}> {item.value} </Link>
          </li>
        ))}
    </StyledMenu>
  );
};
export default Menu;
