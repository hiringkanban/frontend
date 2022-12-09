
import React from 'react';
import styled from 'styled-components';
import headingStyle from './style';

interface headingProps {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    children: React.ReactNode
}

const Heading:React.FC<headingProps> = ({level, children, ...props}) => React.createElement(
    styled(level)`
        ${headingStyle[level]}
    `,
    {...props},
    children
);
export default Heading;