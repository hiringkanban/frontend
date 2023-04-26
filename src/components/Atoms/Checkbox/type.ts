export interface CheckBoxProps {
  name?: string;
  value?: string | number;
  checked?: boolean;
  children?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Group: React.ReactInstance;
}

export interface GroupProps {
  onChange: (values: (string | number)[]) => (string | number)[];
  options: { name: string | number }[];
}
