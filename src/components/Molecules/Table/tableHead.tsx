import { Dispatch, SetStateAction } from 'react';
import { TableRowItem } from './style';
import { ColumnsT, DataSourceT } from './type';
import TableHeaderCell from './tableHeaderCell';

interface HeaderProps {
  columns: ColumnsT[];
  data: DataSourceT;
  handleChange: Dispatch<SetStateAction<DataSourceT[]>>;
}

const TableHead = ({ columns, handleChange, data }: HeaderProps) => {
  return (
    <TableRowItem>
      {columns.map((column) => (
        <TableHeaderCell key={column.key} column={column} data={data} handleChange={handleChange} />
      ))}
    </TableRowItem>
  );
};

export default TableHead;
