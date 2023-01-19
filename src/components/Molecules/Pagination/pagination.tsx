//import { range } from "lodash";
import React, { useEffect, useState } from "react";
import {
    StyledPagination,
    StyledPaginationLink
} from "./style"
import { paginationProps } from "./type"

const Pagiantion:React.FC<paginationProps> = ({total}) => {

    const _rang = (start: number, end: number) => {
        return Array(Math.ceil(end - start +1)).fill(start).map((x, y) => x+ y);
    }

    const [current, setCurrent] = useState(1);
    const window = 4;
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(4);
    const pagination:[React.ReactElement | null] = [null];
    const [rang, setRang] = useState(_rang(1, 4));

    for (let i = 0; i < rang.length; i++ ) {
        pagination.push(
        <StyledPaginationLink active={rang[i] === current}>
            <a onClick={() => setCurrent(rang[i])}>{rang[i]}</a>
        </StyledPaginationLink>); 
    }

    const next = () => {
        setCurrent(current + 1);
        if(current === rang.length) {
            /*setStart(start + 1);
            setEnd(end + 1);*/
            setRang(_rang(rang[0] + 1, rang[0]+4))
        }
    };

    const prev = () => {
        setCurrent(current - 1);
        if(current === start) {
            setStart(start - 1);
            setEnd(end - 1);
        }
    };

    useEffect(() => {}, [current]);

    return (
        <StyledPagination onChange={() => console.log('change')}>
            { end - window > 0 &&
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