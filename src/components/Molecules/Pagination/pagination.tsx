import React, { useEffect, useState } from "react";
import {
    StyledPagination,
    StyledPaginationLink
} from "./style"
import { paginationProps } from "./type"

const Pagiantion:React.FC<paginationProps> = ({total}) => {

    const [current, setCurrent] = useState(1);
    const window = 4;
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(4);
    const pagination:[React.ReactElement | null] = [null];

    for (let i = start; i <= end; i++ ) {
        pagination.push(
        <StyledPaginationLink active={i === current}>
            <a onClick={() => setCurrent(i)}>{i}</a>
        </StyledPaginationLink>); 
    }

    const next = () => { 
        setCurrent(current + 1);
        if(current === end) {
            setStart(start + 1);
            setEnd(end + 1);
        }
    };

    const prev = () => {
        setCurrent(current - 1);
        if(current === start) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    useEffect(() => {}, [current, start, end]);

    return (
        <StyledPagination>
            { end > window &&
                <StyledPaginationLink><a onClick={prev}> Prev </a></StyledPaginationLink>
            }
            {pagination}
            { current < total &&
                <StyledPaginationLink><a  onClick={next}> Next </a></StyledPaginationLink>
            }
        </StyledPagination>
    )
}

export default Pagiantion;