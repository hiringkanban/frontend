export interface InputProps {
  id?: string;
  name?: string;
  type?: string;
  status?: string;
  placeholder?: string;
  width?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
