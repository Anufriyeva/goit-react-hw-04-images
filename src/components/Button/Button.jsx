import React from 'react';
import { LoadMoreButton } from './Button.styled';

const Button = ({ loadMoreImages }) => {
  return (
    <LoadMoreButton type="button" onClick={loadMoreImages}>
      Load more
    </LoadMoreButton>
  )
};

export default Button;