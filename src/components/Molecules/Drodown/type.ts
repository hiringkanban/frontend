import React from 'react';

export interface DropdownProps {
  name?: string | React.ReactNode;
  menu: {
    id?: number;
    name: string | React.ReactNode;
    icon?: React.ReactNode;
    onClick: () => void;
  }[];
}
