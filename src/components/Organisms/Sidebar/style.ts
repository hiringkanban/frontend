import styled from "styled-components";
import { colors } from "../../../styles/styleGuide";

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 20px;
`;

export const OpenIcon = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 5;

    svg {
        font-size: 30px;
    }
`;
export const StyledSideBar = styled.div<{open: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 220px;
    background-color: ${colors.darkBlue};
    z-index: 8;
    transition: all 0.5s ease-out;
    @media (max-width: 768px) {
        left: ${props => props.open ? '0px': '-100%'};

        & ul {
            li {
                justify-content: left;
                border-bottom: none;
            }
        }
    }

    li {
        margin: 0;
        width: 100%;
        padding: 10px 20px;
        cursor: pointer;
        a {
            color: #ffffff;
            font-weight: 500;
            margin-left: 10px;
        }
        :hover {
            opacity: 0.5;
        }
    }
`;

export const CLoseIcon = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
    font-size: 20px;
    color: #999999;
    @media (min-width: 769px) {
        display: none;
    }

`;