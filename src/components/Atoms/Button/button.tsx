import React, { forwardRef } from 'react';
import StyledButton from './style';
import buttonProps from './type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Button: any = forwardRef((props: buttonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    variant = 'primary',
    children,
    href,
    size = 'medium',
    width,
    margin,
    noborder,
    leftIcon,
    rightIcon,
    onClick,
  } = props;

  return (
    <StyledButton
      width={width}
      variant={variant}
      size={size}
      href={href}
      noborder={noborder}
      margin={margin}
      onClick={onClick}
      ref={ref}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </StyledButton>
  );
});

export default Button;
Button.displayName = 'Button';
