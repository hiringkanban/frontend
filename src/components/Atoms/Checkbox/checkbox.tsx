import React, { useState } from 'react';
import { StyledInputWrapper, StyledLabelWrapper } from './style';
import { CheckBoxProps, CheckBoxSubComponent } from './type';

const CheckBox: React.FC<CheckBoxProps> & CheckBoxSubComponent = ({
  children,
  name,
  value,
  disabled = false,
  defaultChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!checked);
    onChange(e);
  };

  return (
    <StyledLabelWrapper>
      <StyledInputWrapper>
        <input
          type="checkbox"
          checked={checked}
          name={name}
          value={value}
          onChange={handleCheck}
          disabled={disabled}
        />
        {children}
      </StyledInputWrapper>
    </StyledLabelWrapper>
  );
};

CheckBox.Group = () => null;

export default CheckBox;
