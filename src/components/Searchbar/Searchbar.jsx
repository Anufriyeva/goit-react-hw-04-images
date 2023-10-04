import React, { useState } from 'react';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [inputQuery, setInputQuery] = useState('');

  const handleInputQuery = (e) => {
    setInputQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputQuery.trim() === '') {
      alert('Enter your request');
      return;
    }
    onSubmit(inputQuery.trim());
    setInputQuery('');
  };

  return (
    <StyledSearchbar>
      <StyledSearchForm onSubmit={handleSubmit}>
        <StyledSearchInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInputQuery}
          value={inputQuery}
        />

        <StyledSearchButton type="submit">Search</StyledSearchButton>
      </StyledSearchForm>
    </StyledSearchbar>
  );
};

export default Searchbar;