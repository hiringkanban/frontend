/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { StyledPagination, StyledPaginationLink } from './style';
import { PaginationProps } from './type';

const Pagiantion: React.FC<PaginationProps> = (props) => {
  const { total, current, pageSize, onChange } = props;

  const getEnd = () => {
    return total > pageSize ? pageSize : total;
  };
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(getEnd());
  const pagination: [React.ReactElement | null] = [null];

  for (let i = start; i <= end; i += 1) {
    pagination.push(
      <StyledPaginationLink active={i === current} key={i}>
        <a aria-hidden onClick={() => onChange(i)}>
          {i}
        </a>
      </StyledPaginationLink>
    );
  }

  const next = () => {
    onChange(current + 1);
    if (current === end) {
      setStart(start + 1);
      setEnd(end + 1);
    }
  };

  const prev = () => {
    onChange(current - 1);
    if (current === start) {
      setStart(start - 1);
      setEnd(end - 1);
    }
  };

  useEffect(() => {}, [current, start, end]);

  return (
    <StyledPagination>
      {end > pageSize && (
        <StyledPaginationLink>
          <a aria-hidden onClick={prev}>
            {' '}
            Prev{' '}
          </a>
        </StyledPaginationLink>
      )}
      {pagination}
      {current < total && total > pageSize && (
        <StyledPaginationLink>
          <a aria-hidden onClick={next}>
            {' '}
            Next{' '}
          </a>
        </StyledPaginationLink>
      )}
    </StyledPagination>
  );
};

export default Pagiantion;
