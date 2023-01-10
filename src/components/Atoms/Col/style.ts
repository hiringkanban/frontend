import styled from "styled-components";
import { colT } from "./type";

const StyledCol = styled.div<{span: colT, offset?: colT}>`
    flex: ${props => props.span * 100 / 12}%;
    margin-inline-start: ${props => props.offset !== undefined ? props.offset * 100 / 12 : 0}%;
    @media (max-width: 768px) {
        width: 100%;
        margin-inline-start:0;
    }
`;

export default StyledCol;