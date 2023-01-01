import React from "react";

export interface menuProps {
    items?: { 
        value: string | number | React.ReactNode,
        href: string,
        icon?: React.ReactNode
    }[],
    lastChildStyle?: string,
    stacked?: boolean,
}