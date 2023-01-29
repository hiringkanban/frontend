import React from 'react';
import Heading from '../Heading';
import StyledBox from './style';
import { BoxProps } from './type';

const Box: React.FC<BoxProps> = (props) => {
  const { title, padding, margin, children } = props;
  return (
    <StyledBox padding={padding} margin={margin}>
      {title ? <Heading level="h3">{title}</Heading> : ''}
      {children}
    </StyledBox>
  );
};

export default Box;
