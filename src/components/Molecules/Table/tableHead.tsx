import { TableRowItem, TableHeaderCell } from './style';
import { ColumnsT } from './type';

interface HeaderProps {
  columns: ColumnsT[];
}

const TableHead = ({ columns }: HeaderProps) => {
  return (
    <TableRowItem>
      {columns.map(({ title, key }) => (
        <TableHeaderCell key={key}>{title}</TableHeaderCell>
      ))}
    </TableRowItem>
  );
};

export default TableHead;
