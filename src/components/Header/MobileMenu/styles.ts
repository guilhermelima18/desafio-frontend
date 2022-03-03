import styled from "styled-components";

export const MobileContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 100;

  div {
    background-color: var(--primary-color);
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    gap: 20px;
    position: relative;

    a {
      color: white;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    button {
      position: absolute;
      width: 30px;
      height: 30px;
      top: 10px;
      right: 10px;
      border-radius: 7px;
      outline: none;
      border: 0;
      font-size: 0.9rem;
    }
  }
`;
