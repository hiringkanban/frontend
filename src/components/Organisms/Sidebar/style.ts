import styled from "styled-components";
import { colors } from "../../../styles/styleGuide";

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    padding: 20px;
`;

export const StyledSideBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 220px;
    background-color: ${colors.darkBlue};

    @media (max-width: 768px) {
        width: 50px;
    }

    li {
        margin: 0;
        width: 100%;
        padding: 10px 20px;
        cursor: pointer;
        a {
            color: #fff;
            font-weight: 500;
            margin-left: 10px;
        }
        :hover {
            opacity: 0.5;
        }
    }
`;
