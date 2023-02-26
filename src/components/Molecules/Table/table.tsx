import { useState } from 'react';
import { TableProps } from './type';
import { StyledTable, TableWraper, TableHeader, TableFooter } from './style';

import TableHead from './tableHead';
import TableRow from './tableRow';

const Table: React.FC<TableProps> = (props) => {
  const { columns, dataSource, header, footer } = props;

  const [data, setData] = useState(dataSource);
  return (
    <TableWraper>
      <TableHeader>{header}</TableHeader>
      <StyledTable>
        <thead>
          <TableHead columns={columns} data={data} handleChange={setData} />
        </thead>
        <tbody>
          <TableRow dataSource={data} columns={columns} />
        </tbody>
      </StyledTable>
      <TableFooter>{footer}</TableFooter>
    </TableWraper>
  );
};

export default Table;
