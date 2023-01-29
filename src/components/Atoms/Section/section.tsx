import React from 'react';
import StyledSection from './style';
import { SectionProps } from './type';

const Box: React.FC<SectionProps> = ({ children, width, left, right }) => (
  <StyledSection width={width} left={left} right={right}>
    {children}
  </StyledSection>
);

export default Box;
