import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  max-width: 60%;
  height: auto;
  /* overflow: auto; */
`;