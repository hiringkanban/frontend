import React from 'react';

import { FormProps } from './type';
import StyledForm from './style';

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
