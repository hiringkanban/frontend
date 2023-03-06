import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import FlexBox from '../../Atoms/Flexbox/flexbox';
import { StyledTableHeaderCell } from './style';
import { TableHeadCellProps, DataSourceT } from './type';

const TableHeaderCell: React.FC<TableHeadCellProps> = ({ column, data, sortData }) => {
  const [sort, setSort] = useState('');

  const doSort = (datas: DataSourceT[]) => {
    const newData = [...datas];
    if (sort === '') {
      setSort('up');
      newData.sort((a, b) => column.sorted?.(a, b) as number);
      sortData([...newData]);
    } else if (sort === 'up') {
      setSort('down');
      newData.sort((a, b) => column.sorted?.(b, a) as number);
      sortData([...newData]);
    } else if (sort === 'down') {
      setSort('');
      sortData([...data]);
    }
  };

  const issorted = column.sorted ? (
    // eslint-disable-next-line react/button-has-type
    <FlexBox direction="column">
      <FontAwesomeIcon icon={['fas', 'caret-up']} style={sort === 'up' ? { color: 'red' } : {}} />
      <FontAwesomeIcon
        icon={['fas', 'caret-down']}
        style={sort === 'down' ? { color: 'red' } : {}}
      />
    </FlexBox>
  ) : (
    ''
  );

  return (
    <StyledTableHeaderCell onClick={() => doSort(data)} isSortable={column.sorted !== undefined}>
      <FlexBox justify="space-between" alignItem="center">
        {column.title}
        {issorted}
      </FlexBox>
    </StyledTableHeaderCell>
  );
};

export default TableHeaderCell;
