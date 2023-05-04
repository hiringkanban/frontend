import { Dispatch, SetStateAction } from 'react';
import { TableRowItem } from './style';
import { ColumnsT, DataSourceT } from './type';
import TableHeaderCell from './tableHeaderCell';

interface HeaderProps {
  columns: ColumnsT[];
  data: DataSourceT[];
  setData: Dispatch<SetStateAction<DataSourceT[]>>;
  // filterData?: Dispatch<SetStateAction<DataSourceT[]>>;
}

const TableHead = ({ columns, data, setData }: HeaderProps) => {
  return (
    <TableRowItem>
      {columns.map((column) => (
        <TableHeaderCell key={column.key} column={column} data={data} updateData={setData} />
      ))}
    </TableRowItem>
  );
};

export default TableHead;
