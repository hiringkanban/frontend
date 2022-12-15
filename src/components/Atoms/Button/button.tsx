import React from "react";
import StyledButton from "./style";
import buttonProps from "./type";

const Button:React.FC<buttonProps> = (props) => {
    const { 
        variant = 'primary',
        children,
        href,
        size
    } = props;

    return (
        <StyledButton
            variant={variant}
            size={size}
            href={href}
        >
         {children} 
        </StyledButton>
    )
}

export default Button;

