import React from 'react';

type MenuT = {
  value: string | number | React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}[];

export interface NavbarProps {
  leftMenu?: MenuT;
  rightMenu?: MenuT;
  logo?: React.ReactNode;
}
