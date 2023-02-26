import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import styled from 'styled-components';
import { StyledTableHeaderCell } from './style';
import { DataSourceT, TableHeadCellProps } from './type';

const TableHeaderCell: React.FC<TableHeadCellProps> = ({ column, data, handleChange }) => {
  const [sort, setSort] = useState('');
  const doSort = (datas: DataSourceT) => {
    const newData = datas.sort((a: DataSourceT, b: DataSourceT) => column.sorted?.(a, b));
    handleChange([...newData]);
  };
  const issorted = column.sorted ? (
    // eslint-disable-next-line react/button-has-type
    <FontAwesomeIcon icon={['fas', 'caret-up']} onClick={() => doSort(data)} />
  ) : (
    ''
  );

  const Wrap = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  return (
    <StyledTableHeaderCell>
      <Wrap>
        {column.title}
        {issorted}
      </Wrap>
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
