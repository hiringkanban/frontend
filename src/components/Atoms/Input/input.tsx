import React from 'react';
import StyledInput from './style';
import { InputProps } from './type';

const Input: React.FC<InputProps> = (props) => {
  const { onChange, status, name, type, placeholder, width } = props;

  return (
    <StyledInput
      name={name}
      type={type}
      status={status}
      placeholder={placeholder}
      width={width}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
