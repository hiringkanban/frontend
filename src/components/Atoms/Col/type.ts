import React from "react";
export type colT = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface colProps {
    span: colT,
    offset?: colT,
    children?: React.ReactNode
}