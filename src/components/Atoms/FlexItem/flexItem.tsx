import React from 'react';
import StyledFlexItem from './style';
import { FlexItemProps } from './type';

const FlexItem: React.FC<FlexItemProps> = ({ flex, children }) => {
  return <StyledFlexItem flex={flex}> {children} </StyledFlexItem>;
};

export default FlexItem;
