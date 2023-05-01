import React, { useState } from 'react';
import { StyledInputWrapper, StyledLabelWrapper } from './style';
import { CheckBoxProps, CheckBoxSubComponent } from './type';

const CheckBox: React.FC<CheckBoxProps> & CheckBoxSubComponent = ({
  children,
  name,
  value,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const [isChecked, setChecked] = useState(checked);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);
    onChange(e);
  };

  return (
    <StyledLabelWrapper>
      <StyledInputWrapper>
        <input
          type="checkbox"
          checked={isChecked}
          name={name}
          value={value}
          onChange={(e) => handleCheck(e)}
          disabled={disabled}
        />
        {children}
      </StyledInputWrapper>
    </StyledLabelWrapper>
  );
};

CheckBox.Group = () => null;

export default CheckBox;
