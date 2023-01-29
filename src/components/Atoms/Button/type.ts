export default interface ButtonProps {
  href?: string;
  size?: string;
  variant?: string;
  width?: string;
  margin?: string;
  noborder?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}
