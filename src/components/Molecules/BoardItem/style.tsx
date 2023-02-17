import styled from 'styled-components';

export const StyledBoardItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  margin-bottom: 10px;

  & h4 {
    line-height: 1;
  }
  & h5 {
    font-weight: 300;
  }
`;

export const StyledDetail = styled.div`
  display: flex;
  font-size: 12px;

  & div {
    margin: 10px 10px 0 0;
  }
`;

/*
export const DetailLocation = styled.div`

`; */
