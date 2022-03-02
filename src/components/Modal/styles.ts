import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalTitle = styled.h1`
  margin-bottom: 2rem;
`;

export const ButtonClose = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 780px) {
    & {
      flex-direction: column;
      gap: 0px;
    }
  }
`;

export const ButtonActionsGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 4rem;
`;
