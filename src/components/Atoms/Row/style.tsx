import styled from "styled-components";

const StyledRow = styled.div<{gap?: number, margin?: string}>`
    display: flex;
    flex-wrap: nowrap;
    gap: ${props => props.gap}px;
    margin: ${props => props.margin};

    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export default StyledRow;