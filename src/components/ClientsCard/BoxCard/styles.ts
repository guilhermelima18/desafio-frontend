import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
  margin-bottom: 3rem;
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
