import React from 'react';
import StyledContainer from './style';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <StyledContainer> {children} </StyledContainer>
);

export default Container;
