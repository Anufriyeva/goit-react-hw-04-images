import styled from 'styled-components';

export const StyledAppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const StyledImageList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 20px;

  img {
    max-width: 100%;
    height: auto;
  }
`;