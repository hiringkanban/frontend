import { Dispatch, SetStateAction } from 'react';

export interface ColumnsT {
  title: string | number;
  key: string | number;
  dataIndex: string;
  render?: (column: ColumnsT, item: DataSourceT) => unknown;
  sorted?: (a: DataSourceT, b: DataSourceT) => number;
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
