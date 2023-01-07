import React from "react";

export type valueT = string | number;

export interface selectProps {
    options: {
        label: valueT,
        value: valueT
    }[],
    width: string,
    selectedValue: valueT,
    leftIcon?: React.ReactNode,
    rightIcon?: React.ReactNode,
    handleChange: React.Dispatch<React.SetStateAction<valueT>>
}