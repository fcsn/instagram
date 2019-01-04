import React from 'react';
import styled from 'styled-components';
import SearchHeaderContainer from './searchHeaderContainer/searchHeaderContainer';

const Box = styled.div`
    height: 100%;
    width: 100%;
`;

const SearchContainer = () => {
  return (
    <Box>
      <SearchHeaderContainer />
    </Box>
  );
};

export default SearchContainer;
