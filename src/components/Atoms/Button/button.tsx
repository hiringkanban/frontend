import React, { forwardRef } from "react";
import StyledButton from "./style";
import buttonProps from "./type";

const Button: any = forwardRef((props: buttonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { 
        variant = 'primary',
        children,
        href,
        size = 'medium',
        width,
        noborder,
        leftIcon,
        rightIcon,
        onClick
    } = props;

    return (
        <StyledButton
            width={width}
            variant={variant}
            size={size}
            href={href}
            noborder={noborder}
            onClick={onClick}
            ref={ref}
        >
            {leftIcon}
            {children}
            {rightIcon}
        </StyledButton>
    )
})

export default Button;

