import React from 'react';
import { colors } from '../../../styles/styleGuide';
import StyledLink from './style';

interface LinkProps {
  href: string;
  // eslint-disable-next-line react/require-default-props
  color?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, color = colors.primary }) => {
  return (
    <StyledLink to={href} color={color}>
      {' '}
      {children}{' '}
    </StyledLink>
  );
};

export default Link;
