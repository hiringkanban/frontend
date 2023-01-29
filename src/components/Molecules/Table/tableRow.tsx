import { TableRowItem } from './style';
import TableRowCell from './tableRowCell';
import { TableProps } from './type';

const TableRow = ({ dataSource, columns }: TableProps) => {
  return (
    <>
      {dataSource.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TableRowItem>
          {columns.map((column) => (
            <TableRowCell key={column.key} item={item} column={column} />
          ))}
        </TableRowItem>
      ))}
    </>
  );
};

export default TableRow;
