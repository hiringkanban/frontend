import styled from "styled-components";

const StyledBox = styled.div<{width?: string }>`
    display: flex;
    align-items: center;
    width: ${props => props.width};
`;

export default StyledBox;