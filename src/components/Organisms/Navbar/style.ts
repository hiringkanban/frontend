import styled from 'styled-components';

export const StyledNav = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  align-items: center;
  height: 72px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNavList = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  background-color: white;
  transition: all ease-in-out 250ms;
  z-index: 20;

  & svg {
    color: #000 !important;
  }
`;

export default StyledNav;
