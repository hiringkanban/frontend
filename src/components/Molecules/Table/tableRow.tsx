import { TableRowItem } from './style';
import TableRowCell from './tableRowCell';
import { TableProps } from './type';

const TableRow: React.FC<TableProps> = ({ dataSource, columns }) => {
  return (
    <>
      {dataSource.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <TableRowItem key={item.key}>
          {columns.map((column) => (
            <TableRowCell key={column.key} item={item} column={column} />
          ))}
        </TableRowItem>
      ))}
    </>
  );
};

export default TableRow;
