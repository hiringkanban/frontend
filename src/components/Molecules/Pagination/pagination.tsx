import React, { useEffect, useState } from "react";
import {
    StyledPagination,
    StyledPaginationLink
} from "./style"
import { paginationProps } from "./type"

const Pagiantion:React.FC<paginationProps> = (props) => {

    const {
        total,
        current,
        pageSize,
        onChange
    } = props;

    const getEnd = () => {
        return total > pageSize ? pageSize :  total
    }
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(getEnd());
    const pagination:[React.ReactElement | null] = [null];

    for (let i = start; i <= end; i++ ) {
        pagination.push(
        <StyledPaginationLink active={i === current}>
            <a onClick={() => onChange(i)}>{i}</a>
        </StyledPaginationLink>); 
    }

    const next = () => { 
        onChange(current + 1);
        if(current === end) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    const prev = () => {
        onChange(current - 1);
        if(current === start) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    useEffect(() => {}, [current, start, end]);

    return (
        <StyledPagination>
            { end > pageSize && 
                <StyledPaginationLink><a onClick={prev}> Prev </a></StyledPaginationLink>
            }
            {pagination}
            { (current < total && total > pageSize) &&
                <StyledPaginationLink><a onClick={next}> Next </a></StyledPaginationLink>
            }
        </StyledPagination>
    )
}

export default Pagiantion;