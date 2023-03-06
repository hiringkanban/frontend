import { Dispatch, SetStateAction } from 'react';
import { TableRowItem } from './style';
import { ColumnsT, DataSourceT } from './type';
import TableHeaderCell from './tableHeaderCell';

interface HeaderProps {
  columns: ColumnsT[];
  data: DataSourceT[];
  sortData: Dispatch<SetStateAction<DataSourceT[]>>;
}

const TableHead = ({ columns, data, sortData }: HeaderProps) => {
  return (
    <TableRowItem>
      {columns.map((column) => (
        <TableHeaderCell key={column.key} column={column} data={data} sortData={sortData} />
      ))}
    </TableRowItem>
  );
};

export default TableHead;
