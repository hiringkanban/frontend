import styled from "styled-components";
import { colors, fontWeight } from "../../../styles/styleGuide";

export const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const TableCell = styled.td`
    height: 40px;
    padding: 15px;
    font-size: 15px;
    font-weight: ${fontWeight.light};
    border-top: 1px solid ${colors.lightGray};
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px;
    }

    & span {
        @media (max-width: 768px) {
            padding: 0px;
        }
    }
`;

export const TableRowItem  = styled.tr`
    
`;

export const TableHead = styled.thead`

`;

export const TableHeaderCell = styled.th`
    text-align: left;
    padding: 15px;
    background-color: #f5f5f5;
    @media (max-width: 768px) {
        padding: 5px;
        font-size: 14px;
    }
`;


export const TableBody = styled.tbody`

`;