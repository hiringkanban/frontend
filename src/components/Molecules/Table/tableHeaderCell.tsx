/* eslint-disable react/button-has-type */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import { StyledTableHeaderCell } from './style';
import { TableHeadCellProps, DataSourceT } from './type';
import TableFilter from './tableFilter';

const TableHeaderCell: React.FC<TableHeadCellProps> = ({ column, data, updateData }) => {
  const [sort, setSort] = useState('');

  const doSort = (datas: DataSourceT[]) => {
    const newData = [...datas];
    if (sort === '') {
      setSort('up');
      newData.sort((a, b) => column.sorted?.(a, b) as number);
      updateData([...newData]);
    } else if (sort === 'up') {
      setSort('down');
      newData.sort((a, b) => column.sorted?.(b, a) as number);
      updateData([...newData]);
    } else if (sort === 'down') {
      setSort('');
      updateData([...data]);
    }
    return datas;
  };

  const issorted = column.sorted ? (
    <>
      <button onClick={() => doSort(data)}> sort </button>
      <FontAwesomeIcon icon={['fas', 'caret-up']} style={sort === 'up' ? { color: 'red' } : {}} />
      <FontAwesomeIcon
        icon={['fas', 'caret-down']}
        style={sort === 'down' ? { color: 'red' } : {}}
      />
    </>
  ) : (
    ''
  );

  const isfilter = column.filters ? (
    <TableFilter options={column.filters} column={column} data={data} setData={updateData} />
  ) : (
    ''
  );

  return (
    <StyledTableHeaderCell isSortable={column.sorted !== undefined}>
      <FlexBox justify="space-between" alignItem="center">
        {column.title}
        {issorted}
        {isfilter}
      </FlexBox>
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
