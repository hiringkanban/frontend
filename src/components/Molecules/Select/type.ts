import React from 'react';

export type ValueT = string | number;

export interface SelectProps {
  options: {
    id?: number;
    label: ValueT;
    value: ValueT;
  }[];
  width: string;
  selectedValue: ValueT;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  handleChange: React.Dispatch<React.SetStateAction<ValueT>>;
}
