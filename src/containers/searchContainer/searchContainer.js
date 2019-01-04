import React from 'react';
import styled from 'styled-components';
import SearchHeaderContainer from './searchHeaderContainer/searchHeaderContainer';
import SearchResultList from './searchResultList/searchResultList';
import Footer from '../../components/footer/Footer';

const Box = styled.div`
    height: 100%;
    width: 100%;
`;

const SearchContainer = () => {
  return (
    <Box>
      <SearchHeaderContainer />
      <SearchResultList />
      <Footer />
    </Box>
  );
};

export default SearchContainer;
