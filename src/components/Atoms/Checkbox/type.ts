export interface CheckBoxProps {
  name?: string;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckBoxSubComponent {
  Group: React.FC<GroupProps>;
}

export interface GroupProps {
  options: CheckboxValueType[];
  onChange: (value: CheckboxGroupValues) => void;
}

export type CheckboxGroupValues = (string | number)[];

export type CheckboxValueType = {
  name: string | number;
  id: string | number;
};
