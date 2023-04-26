import React, { useState } from 'react';
import StyledCheckBox from './style';
import { CheckBoxProps } from './type';
import Group from './group';

const CheckBox: React.FC<CheckBoxProps> = ({ children, name, value, checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(!isChecked);
    onChange(e);
  };

  return (
    <>
      <StyledCheckBox
        type="checkbox"
        checked={isChecked}
        name={name}
        value={value}
        onChange={(e) => handleCheck(e)}
      />
      <label htmlFor={name}>{children}</label>
    </>
  );
};
export default Object.assign(CheckBox, { Group });
