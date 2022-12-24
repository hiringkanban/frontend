import React from "react";
import StyledFlexItem from "./style";
import { flexItemProps } from "./type";

const FlexItem:React.FC<flexItemProps> = ({ flex, children }) => {
    return <StyledFlexItem flex={flex}> {children} </StyledFlexItem>
}

export default FlexItem;