import React, { Component } from 'react';
import {
  StyledSearchbar,
  StyledSearchForm,
  StyledSearchButton,
  StyledSearchInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleInputQuery = e => {
    this.setState({ inputQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputQuery.trim() === '') {
      alert('Enter your request');
      return;
    }
    this.props.onSubmit(this.state.inputQuery.trim());
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <StyledSearchbar>
        <StyledSearchForm onSubmit={this.handleSubmit}>
          <StyledSearchInput
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputQuery}
            value={this.state.inputQuery}
            />
          
          <StyledSearchButton type="submit">Search</StyledSearchButton>
                
        </StyledSearchForm>
      </StyledSearchbar>
    );
  }
}

export default Searchbar;