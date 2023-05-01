import { useState } from 'react';
import CheckBox from './checkbox';
import { GroupProps, CheckboxGroupValues } from './type';

const Group: React.FC<GroupProps> = ({ options, onChange }): JSX.Element => {
  const [values, setValue] = useState<CheckboxGroupValues>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      const index = values.indexOf(e.target.value);
      values.splice(index, 1);
    } else {
      values.push(e.target.value);
    }
    setValue(values);
    onChange(values);
  };

  return (
    <>
      {options.map((checkbox) => (
        <CheckBox key={checkbox.name} value={checkbox.name} onChange={handleChange}>
          {checkbox.name}
        </CheckBox>
      ))}
    </>
  );
};

export default Group;
