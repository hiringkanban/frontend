import { useState } from 'react';
import CheckBox from './checkbox';
import { GroupProps, CheckboxGroupValues } from './type';

const Group: React.FC<GroupProps> = ({ options, onChange, defaultValue = [] }): JSX.Element => {
  const [values, setValue] = useState<CheckboxGroupValues>(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      const index = values.indexOf(e.target.value);
      values.splice(index, 1);
    } else {
      values.push(e.target.value);
    }
    onChange([...values]);
  };

  return (
    <>
      {options.map((checkbox) => (
        <CheckBox
          key={checkbox.name}
          value={checkbox.name}
          defaultChecked={defaultValue?.includes(checkbox.name)}
          onChange={handleChange}
        >
          {checkbox.name}
        </CheckBox>
      ))}
    </>
  );
};

export default Group;
