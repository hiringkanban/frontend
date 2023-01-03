import { TableRowItem } from "./style";
import { columnsT } from "./type";
import { TableHeaderCell } from "./style";

interface headerProps {
    columns: columnsT[]
}

const TableHeader = ({ columns }: headerProps) => {

    return (
        <TableRowItem>
            { columns.map(({title, key}) =>
                <TableHeaderCell key={key}>{title}</TableHeaderCell> 
            )}
        </TableRowItem>
    )
}

export default TableHeader;