import styled from 'styled-components';
import { FlexItemProps } from './type';

const StyledFlexItem = styled.div<FlexItemProps>`
  flex: ${(props) => props.flex};
`;

export default StyledFlexItem;
