import React from 'react';
import styled from 'styled-components';
import headingStyle from './style';

interface HeadingProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, children, ...props }) =>
  React.createElement(
    styled(level)`
      ${headingStyle[level]}
    `,
    { ...props },
    children
  );
export default Heading;
