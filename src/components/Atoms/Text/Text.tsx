import React from 'react';
import StyledText from './style';
import { TextProps } from './type';

const Text: React.FC<TextProps> = ({ children, align, weight }) => {
  return (
    <StyledText align={align} weight={weight}>
      {children}
    </StyledText>
  );
};

export default Text;
