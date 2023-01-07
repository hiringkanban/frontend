import React from "react";
import StyledButton from "./style";
import buttonProps from "./type";

const Button:React.FC<buttonProps> = (props) => {
    const { 
        variant = 'primary',
        children,
        href,
        size = 'medium',
        width,
        noborder,
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
        >
         {children} 
        </StyledButton>
    )
}

export default Button;

