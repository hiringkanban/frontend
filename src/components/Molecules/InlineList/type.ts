export interface ListProps {
  items: {
    id?: number;
    value: string | number | React.ReactNode;
    href: string;
    onClick?: () => void;
  }[];
  fontSize?: string;
  breadcrumbs?: boolean;
}
