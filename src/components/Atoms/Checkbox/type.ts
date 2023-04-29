export interface CheckBoxProps {
  name?: string;
  value?: string | number;
  checked?: boolean;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface CheckboxComposition {
  Groupe?: React.ComponentType<GroupProps>;
}

export interface GroupProps {
  options: { name: string | number }[];
  onChange?: (value: []) => [];
}
