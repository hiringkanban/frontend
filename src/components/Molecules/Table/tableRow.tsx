import { TableRowItem } from "./style";
import TableRowCell from "./tableRowCell";
import { tableProps } from "./type";

const TableRow = ({ dataSource, columns }: tableProps) => {

    return (
        <>
            {dataSource.map((item) =>
                <TableRowItem>
                    {columns.map((column) => 
                        <TableRowCell item={item} column={column} />
                    )}
                </TableRowItem>
            )}
        </>
    )
}

export default TableRow;