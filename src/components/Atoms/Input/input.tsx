import React from "react";
import StyledInput from "./style";
import { inputProps } from "./type";

const Input:React.FC<inputProps> = (props) => {
    const { 
        onChange,
        status,
        name,
        type,
        placeholder,
        width
    } = props;

    return <StyledInput
        name={name}
        type={type}
        status={status}
        placeholder={placeholder}
        width={width}
        onChange={(e) => onChange(e)}
    />
}

export default Input;