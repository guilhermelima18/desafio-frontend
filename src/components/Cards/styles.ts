import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
`;

export const BoxClient = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 680px) {
    & {
      flex-direction: column-reverse;
      align-items: flex-end;
    }
  }

  @media (max-width: 500px) {
    & {
      align-items: center;
    }
  }
`;

export const TitleHome = styled.h1`
  width: 100%;
  margin: 2rem 0;
  font-size: 1.8rem;
  position: relative;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    border-bottom: 2px solid black;
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  border-spacing: 0 0.3rem;

  thead tr th,
  tbody tr td {
    background-color: white;
    padding: 15px;
    text-align: left;
    transition: 300ms;
    font-weight: 500;
    border-bottom: 1px solid rgba(200, 200, 200, 0.7);
  }
`;

export const BoxActions = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BoxPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2rem;
`;
