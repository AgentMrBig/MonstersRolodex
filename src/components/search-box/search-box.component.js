import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  line-height: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

export const SearchBox = ({ placeholder, handleChange }) => (
  <SearchInput
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
