import React from 'react';

export interface DropdownProps {
  name?: string | React.ReactNode;
  menuItems: DropDownItemProps[];
}

export interface DropDownItemProps {
  id?: number;
  name: string | React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
}
