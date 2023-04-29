import React, { useState } from 'react';
import StyledCheckBox from './style';
import { CheckBoxProps, CheckboxComposition } from './type';

const CheckBox: React.FC<CheckBoxProps> & CheckboxComposition = ({
  children,
  name,
  value,
  checked = false,
  onChange,
}) => {
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
export default CheckBox;
