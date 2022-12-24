import styled from "styled-components";
import { flexItemProps } from "./type";

const StyledFlexItem = styled.div<flexItemProps>`
    flex: ${props => props.flex};
`;

export default StyledFlexItem;