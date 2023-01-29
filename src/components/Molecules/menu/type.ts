export interface MenuProps {
  items?: {
    id?: number;
    value: string | number | React.ReactNode;
    href: string;
    icon?: React.ReactNode;
  }[];
  lastChildStyle?: string;
  stacked?: boolean;
}
