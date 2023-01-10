import styled from "styled-components";

const StyledRow = styled.div<{gap?: number}>`
    display: flex;
    flex-wrap: nowrap;
    gap: ${props => props.gap}px;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export default StyledRow;