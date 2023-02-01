import styled from 'styled-components';
import { colors } from '../../../styles/styleGuide';

const StyledAuth = styled.div`
  width: 30%;
  margin: 0 auto;
  margin-top: 7.5em;

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 35px;
    padding-bottom: 30px;

    & button {
      display: block;
      text-align: center;
      font-weight: 500;
    }
  }

  & h3 {
    font-weight: 600;
  }

  & p {
    max-width: 80%;
    color: ${colors.gray};
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 1em;
  }
`;

export default StyledAuth;
