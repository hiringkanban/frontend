import styled from "styled-components";
import rowProps from "./type";

const StyledRow = styled.div<rowProps>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: center;
    height: ${props => props.height}px;
`;

 export default StyledRow;
