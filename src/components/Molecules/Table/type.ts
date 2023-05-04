import { Dispatch, SetStateAction } from 'react';

export interface ColumnsT {
  title: string | number;
  key: string | number;
  dataIndex: string;
  render?: (column: ColumnsT, item: DataSourceT) => unknown;
  sorted?: (a: DataSourceT, b: DataSourceT) => number;
  filters?: TableDataFilterT;
  onFilter?: (value: string[], record: DataSourceT) => boolean;
}

export type TableDataFilterT = {
  name: string | number;
  id: string | number;
}[];

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
  updateData: Dispatch<SetStateAction<DataSourceT[]>>;
}

export interface TableFilterProps {
  options: TableDataFilterT;
  data: DataSourceT[];
  column: ColumnsT;
  setData: Dispatch<SetStateAction<DataSourceT[]>>;
}
