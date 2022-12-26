import React from "react";

export default interface flexboxProps {
    direction?: string,
    justify?: string,
    alignItem?: string,
    alignContent?: string,
    flexWrap?: string,
    flexFlow?: string,
    gap?:string,
    height?: number,
    children: React.ReactNode
}