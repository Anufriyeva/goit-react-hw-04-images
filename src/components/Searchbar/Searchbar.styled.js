import styled from 'styled-components';

export const StyledSearchbar = styled.header`
  /* background-color: #f2f2f2; */
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchButton = styled.button`
  background-color: #df3b01;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  /* padding: 10px; */
  font-size: 16px;
  border-radius: 4px;
  margin-left: 5px;
`;

export const StyledSearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  outline: none;
`;