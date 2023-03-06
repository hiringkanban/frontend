import { useState } from 'react';
import _ from 'lodash';
import { DataSourceT, TableProps } from './type';
import { StyledTable, TableWraper, TableHeader, TableFooter } from './style';
import TableHead from './tableHead';
import TableRow from './tableRow';

const Table: React.FC<TableProps> = (props) => {
  const { columns, dataSource, header, footer } = props;
  const [data] = useState<DataSourceT[]>(dataSource);
  const [sortedData, setSortedData] = useState<DataSourceT[]>(dataSource);

  return (
    <TableWraper>
      <TableHeader>{header}</TableHeader>
      <StyledTable>
        <thead>
          <TableHead columns={columns} data={data} sortData={setSortedData} />
        </thead>
        <tbody>
          <TableRow dataSource={sortedData} columns={columns} />
        </tbody>
      </StyledTable>
      <TableFooter>{footer}</TableFooter>
    </TableWraper>
  );
};

export default Table;
