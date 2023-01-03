
import { tableProps } from "./type";
import { 
    StyledTable,
} from "./style";

import TableHeader from "./tableHeader";
import TableRow from "./tableRow";

const Table:React.FC<tableProps> = ({ columns, dataSource }) => {
   
    return (
        <StyledTable>
            <thead>
                <TableHeader columns={columns} />
            </thead>
            <tbody>
                <TableRow dataSource={dataSource} columns={columns} />
            </tbody>
        </StyledTable>
    );
}

export default Table;