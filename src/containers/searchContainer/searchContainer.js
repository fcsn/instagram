import React from 'react';
import styled from 'styled-components';
import SearchHeaderContainer from './searchHeaderContainer/searchHeaderContainer';
import SearchResultList from './searchResultList/searchResultList';

const Box = styled.div`
    height: 100%;
    width: 100%;
`;

const SearchContainer = () => {
  return (
    <Box>
      <SearchHeaderContainer />
      <SearchResultList />
    </Box>
  );
};

export default SearchContainer;
