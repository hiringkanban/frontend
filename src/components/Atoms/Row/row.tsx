import React from "react";
import StyledRow from "./style";
import rowProps from "./type";

const Row:React.FC<rowProps> = ({ direction = 'row', children, justify, height }) => {
    
    return (
        <StyledRow
            direction={direction}
            justify={justify}
            height={height}
        >
            {children} 
        </StyledRow>
    )
}

export default Row;