import { Dispatch, SetStateAction } from 'react';

export interface ColumnsT {
  title: string | number;
  key: string | number;
  dataIndex: string;
  render?: (column: ColumnsT, item: DataSourceT) => unknown;
  sorter?: (a: DataSourceT, b: DataSourceT) => number;
  filters?: { text: string; value: string }[];
  onFilter?: (value: string) => number;
}

export interface DataSourceT {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface TableProps {
  columns: ColumnsT[];
  dataSource: DataSourceT[];
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export interface RowCellprops {
  item: DataSourceT;
  column: ColumnsT;
}

export interface TableHeadCellProps {
  column: ColumnsT;
  data: DataSourceT[];
  sortData: Dispatch<SetStateAction<DataSourceT[]>>;
}
