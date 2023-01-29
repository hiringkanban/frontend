import styled from 'styled-components';
import { SectionProps } from './type';

const StyledSection = styled.div<SectionProps>`
  position: relative;
  width: calc(100% - ${(props) => (props.left ? props.left : 0)});
  left: ${(props) => props.left};
  right: ${(props) => props.right};

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }
`;

export default StyledSection;
