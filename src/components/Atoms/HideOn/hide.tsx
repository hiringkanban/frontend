import React from 'react';
import styled from 'styled-components';

type OnT = 'desktop' | 'mobile';
interface HideProps {
  children: React.ReactNode;
  on: OnT;
}

const StyledHideOn = styled.div<{ on: OnT }>`
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.on === 'desktop'
      ? `@media (min-width: 769px) {
            display: none;
        }`
      : `@media (max-width: 768px) {
            display: none;
            width: auto !important;
        }`}
  @media (max-width: 768px) {
    width: auto;
  }
`;

const HideOn: React.FC<HideProps> = ({ children, on }) => (
  <StyledHideOn on={on}>{children}</StyledHideOn>
);

export default HideOn;
