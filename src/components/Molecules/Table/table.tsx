
import { tableProps } from "./type";
import { 
    StyledTable,
    TableWraper,
    TableHeader,
    TableFooter
} from "./style";

import TableHead from "./tableHead";
import TableRow from "./tableRow";

const Table:React.FC<tableProps> = (props) => {

    const { 
        columns,
        dataSource,
        header,
        footer
     } = props;
   
    return (
        <TableWraper>
            <TableHeader>
                {header}
            </TableHeader>
            <StyledTable>
                <thead>
                    <TableHead columns={columns} />
                </thead>
                <tbody>
                    <TableRow dataSource={dataSource} columns={columns} />
                </tbody>
            </StyledTable>
            <TableFooter>
                {footer}
            </TableFooter>
        </TableWraper>
    );
}

export default Table;