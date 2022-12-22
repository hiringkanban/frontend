import React from "react";
import StyledRow from "./style";
import rowProps from "./type";

const Row:React.FC<rowProps> = ({ direction = 'row', children, justify }) => {
    
    return (
        <StyledRow
            direction={direction}
            justify={justify}
        >
            {children} 
        </StyledRow>
    )
}

export default Row;