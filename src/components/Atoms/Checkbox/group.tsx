import { createContext, useState } from 'react';
import CheckBox from './checkbox';
import { GroupProps } from './type';

const Group: React.FC<GroupProps> = ({ options }) => {
  // const CardContext = createContext();
  const [values, setValue] = useState<(string | number)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.checked) {
      const index = values.indexOf(e.target.value);
      values.splice(index, 1);
    } else {
      values.push(e.target.value);
    }
    console.log(values);
  };

  return options.map((checkbox) => (
    <CheckBox key={checkbox.name} value={checkbox.name} onChange={handleChange}>
      {checkbox.name}
    </CheckBox>
  ));
};

export default Group;
