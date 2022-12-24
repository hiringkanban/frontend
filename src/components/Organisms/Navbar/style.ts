import styled from "styled-components";

export const StyledNav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    @media (max-width: 768px) {
        display: block;
    }

    @media (min-width: 769px) {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 60px;
            height: 5px;
            width: 100%;
            box-shadow: 0px 4px 4px rgb(29 140 242 / 8%);
        }
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

`;

export default StyledNav;