import { TableCell } from './style';
import { RowCellprops } from './type';

const TableRowCell = ({ item, column }: RowCellprops) => {
  const value = item[column.dataIndex];

  return <TableCell>{column.render ? column.render(column, item) : value}</TableCell>;
};

export default TableRowCell;
