import styled from "styled-components";

export const StyledNav = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    @media (max-width: 768px) {
        //padding: 0 18px;
        display: block;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 60px;
        height: 5px;
        width: 100%;
        box-shadow: 0px 4px 4px rgb(29 140 242 / 8%);
    }
`;

export const MobileNav = styled.div`
    & > div > div {
        height: 72px;
    }
    @media (min-width: 769px) {
        display: none;
    }
`;


export default StyledNav;